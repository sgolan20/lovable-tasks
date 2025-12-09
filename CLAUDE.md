# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Google Apps Script web application that delivers Hebrew-language educational content for marketing managers learning to use Lovable (a no-code platform). The project serves instructional HTML pages through Google Apps Script's web app functionality.

## Architecture

**Google Apps Script Structure:**
- [code.gs](code.gs) - Entry point with `doGet()` function that serves HTML files via `HtmlService`
- [task1.html](task1.html) - Self-contained HTML page with embedded CSS, written in Hebrew (RTL)

**Content Language:** All content is in Hebrew with RTL (right-to-left) directionality. Text should remain in Hebrew unless explicitly asked to translate.

**Serving Pattern:** The `doGet()` function uses `HtmlService.createHtmlOutputFromFile()` to serve HTML files. File names passed to this function should exclude the `.html` extension (e.g., `'task1'` serves `task1.html`).

## Development Commands

**Deployment:**
This is a Google Apps Script project. To deploy or test changes:
1. Copy code to Google Apps Script editor at https://script.google.com
2. Deploy as Web App (Deploy > New deployment > Web app)
3. Access via the provided web app URL

**Local Testing:**
Google Apps Script projects cannot run locally. Use the Apps Script editor's built-in preview/test functionality.

## Content Structure

Task pages are structured instructional tutorials with:
- Hebrew headings using Heebo font from Google Fonts
- Step-by-step instructions with numbered/bulleted lists
- Code examples in LTR blocks within RTL context
- Checklist sections for task completion
- Emoji icons for visual emphasis

## Important Notes

- Maintain RTL directionality (`dir="rtl"`) for all Hebrew content
- Code blocks should remain LTR (`direction: ltr`) within the RTL page
- Font family uses `'Heebo', sans-serif` for Hebrew text rendering
- All styling is embedded within HTML files (no separate CSS files)
