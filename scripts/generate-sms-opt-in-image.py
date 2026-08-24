#!/usr/bin/env python3
"""
Generates public/assets/goldpen-sms-opt-in.png — the A2P 10DLC "Via Text" opt-in
collateral card for GOLDPEN Acquisition Intelligence.

Checked into the repo (rather than left as a scratch script) so the card can be
regenerated after any copy change without redoing the layout from scratch.

Usage:
    python3 scripts/generate-sms-opt-in-image.py

Requires Pillow (`pip install pillow`) and macOS system fonts (Georgia, Arial).
No network access, no AI image generation — every word on the card is drawn
from the literal strings below, so the compliance copy can't drift or get
hallucinated.
"""

from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

W = 1200
MARGIN = 90
CONTENT_W = W - 2 * MARGIN

# Brand tokens — keep in sync with src/app/globals.css
COLOR_BG = (250, 249, 246)
COLOR_SURFACE = (255, 255, 255)
COLOR_TEXT = (28, 27, 25)
COLOR_MUTED = (85, 82, 78)
COLOR_ACCENT_DARK = (111, 87, 23)
COLOR_DISCLOSURE_BG = (251, 246, 232)
COLOR_DISCLOSURE_BORDER = (217, 200, 143)

FONT_DIR = "/System/Library/Fonts/Supplemental/"

REPO_ROOT = Path(__file__).resolve().parent.parent
OUTPUT_PATH = REPO_ROOT / "public" / "assets" / "goldpen-sms-opt-in.png"

PROGRAM_NAME = "GOLDPEN Acquisition Intelligence"
SMS_NUMBER = "+1 (786) 460-4334"
PRIVACY_URL = "https://compliance.goldpengroup.com/privacy-policy"
TERMS_URL = "https://compliance.goldpengroup.com/sms-terms"

DISCLOSURE_INTRO = (
    f"Text START to {SMS_NUMBER} to receive customer-care and transaction-related "
    f"SMS messages regarding active acquisition inquiries and transactions."
)
DISCLOSURE_BOLD_LINES = [
    "Message frequency varies.",
    "Message and data rates may apply.",
    "Reply STOP to opt out.",
    "Reply HELP for assistance.",
]
CONSENT_LINE = "Consent is not a condition of purchase or obtaining services."


def font(name, size):
    return ImageFont.truetype(FONT_DIR + name, size)


def serif_bold(size):
    return font("Georgia Bold.ttf", size)


def serif(size):
    return font("Georgia.ttf", size)


def sans(size):
    return font("Arial.ttf", size)


def sans_bold(size):
    return font("Arial Bold.ttf", size)


def text_width(draw, txt, fnt):
    bbox = draw.textbbox((0, 0), txt, font=fnt)
    return bbox[2] - bbox[0]


def wrap(draw, txt, fnt, max_width):
    lines, line = [], ""
    for word in txt.split(" "):
        trial = (line + " " + word).strip()
        if text_width(draw, trial, fnt) <= max_width:
            line = trial
        else:
            lines.append(line)
            line = word
    if line:
        lines.append(line)
    return lines


def draw_wrapped(draw, x, y, txt, fnt, fill, max_width, line_height):
    for i, l in enumerate(wrap(draw, txt, fnt, max_width)):
        draw.text((x, y + i * line_height), l, font=fnt, fill=fill)
    return y + len(wrap(draw, txt, fnt, max_width)) * line_height


def draw_labeled_link(draw, x, y, label, url):
    draw.text((x, y), label, font=sans_bold(20), fill=COLOR_TEXT)
    draw.text(
        (x + text_width(draw, label, sans_bold(20)), y),
        url,
        font=sans(20),
        fill=COLOR_ACCENT_DARK,
    )


def main():
    # Tall probe canvas; cropped to the real content height once everything is drawn.
    canvas = Image.new("RGB", (W, 4000), COLOR_BG)
    draw = ImageDraw.Draw(canvas)

    y = 80
    draw.text((MARGIN, y), "G O L D P E N   G R O U P", font=sans_bold(20), fill=COLOR_ACCENT_DARK)
    y += 46
    y = draw_wrapped(draw, MARGIN, y, PROGRAM_NAME, serif_bold(46), COLOR_TEXT, CONTENT_W, 56)
    y += 6
    draw.text((MARGIN, y), "SMS Opt-In", font=serif(32), fill=COLOR_MUTED)
    y += 66

    # CTA callout
    cta_top = y
    cta_h = 130
    draw.rounded_rectangle(
        [MARGIN, cta_top, W - MARGIN, cta_top + cta_h],
        radius=10, outline=COLOR_ACCENT_DARK, width=4, fill=COLOR_SURFACE,
    )
    cta_text_1, cta_text_2 = "Text START to", SMS_NUMBER
    f1, f2 = serif(34), serif_bold(40)
    w1, w2, gap = text_width(draw, cta_text_1, f1), text_width(draw, cta_text_2, f2), 14
    start_x = MARGIN + (CONTENT_W - (w1 + gap + w2)) // 2
    ty = cta_top + (cta_h - 44) // 2
    draw.text((start_x, ty + 6), cta_text_1, font=f1, fill=COLOR_TEXT)
    draw.text((start_x + w1 + gap, ty), cta_text_2, font=f2, fill=COLOR_ACCENT_DARK)
    y = cta_top + cta_h + 40

    # Disclosure card
    box_top = y
    pad = 36
    inner_w = CONTENT_W - 2 * pad
    intro_font = sans(24)
    intro_lines = wrap(draw, DISCLOSURE_INTRO, intro_font, inner_w)

    box_h = pad * 2 + len(intro_lines) * 34 + 12 + len(DISCLOSURE_BOLD_LINES) * 38 + 46 + 90
    draw.rounded_rectangle(
        [MARGIN, box_top, W - MARGIN, box_top + box_h],
        radius=8, outline=COLOR_DISCLOSURE_BORDER, width=2, fill=COLOR_DISCLOSURE_BG,
    )

    tx = MARGIN + pad
    ty = box_top + pad
    for l in intro_lines:
        draw.text((tx, ty), l, font=intro_font, fill=COLOR_MUTED)
        ty += 34
    ty += 12
    for l in DISCLOSURE_BOLD_LINES:
        draw.text((tx, ty), l, font=sans_bold(25), fill=COLOR_TEXT)
        ty += 38
    draw.text((tx, ty), CONSENT_LINE, font=sans(22), fill=COLOR_MUTED)
    ty += 46

    draw_labeled_link(draw, tx, ty, "Privacy Policy: ", PRIVACY_URL)
    ty += 32
    draw_labeled_link(draw, tx, ty, "SMS Terms: ", TERMS_URL)

    final_h = box_top + box_h + 70
    final = canvas.crop((0, 0, W, final_h))

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    final.save(OUTPUT_PATH)
    print(f"saved {final.size} -> {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
