# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **public GitHub-hosted HTML website** that delivers Hebrew-language educational content for marketing managers learning to use Lovable (a no-code platform). The site consists of static HTML files with embedded CSS, accessible via a public URL.

## Architecture

**Static HTML Site Structure:**
- [index.html](index.html) - Landing page with task navigation grid, showing available and locked tasks
- [task1.html](task1.html) - First task: Theme customization and brand colors
- [task2.html](task2.html) - Second task: Visual improvements (logo, images, videos, animations)
- [code.gs](code.gs) - Legacy Google Apps Script file (may be removed in future)
- Image assets: `lovable-edit-example.png`, `lovable-result-example.png`

**Hosting:** The site is hosted on public GitHub and accessible via an open URL for viewing by course participants.

**Content Language:** All content is in Hebrew with RTL (right-to-left) directionality. Text should remain in Hebrew unless explicitly asked to translate.

**Navigation Pattern:**
- [index.html](index.html) serves as the entry point with a card-based grid showing all tasks
- Each task page has a floating back button (bottom-left) to return to index
- Tasks can be marked as "available" (clickable links) or "locked" (disabled cards with 🔒 icon)

## Development Commands

**Deployment:**
This is a static HTML site hosted on GitHub. To deploy changes:
1. Commit changes to the GitHub repository
2. Changes are immediately live via GitHub Pages or the public hosting URL
3. No build process required - direct HTML/CSS editing

**Local Testing:**
Simply open the HTML files in a web browser to preview changes locally.

## File Structure & Design

### index.html
- Hero section with course title and description
- Grid layout showing task cards (2 available, 2 locked as examples)
- Purple gradient background theme (#667eea to #764ba2)
- Responsive design with animations (fadeIn effects)
- Task cards with hover effects (translateY, shadow)

### task1.html & task2.html
Both task pages share consistent styling:
- **Header:** Purple gradient banner with task title
- **Content sections:** White cards with numbered tasks
- **Task cards:** Hover effects, rounded corners, shadows
- **Tip boxes:** Yellow background (#fff3cd) with border
- **Checklists:** Green background (#e8f5e9) with checkboxes
- **Code blocks:** Dark background (#2d3748) with **RTL directionality** for Hebrew prompts
- **Back button:** Fixed circular button (bottom-left) with tooltip
- **Images:** Visual examples showing Lovable interface (task2 only)

### Visual Theme
- **Primary gradient:** `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **Font:** Heebo from Google Fonts (Hebrew support)
- **Direction:** RTL throughout (`dir="rtl"` on html tag)
- **Task numbers:** Circular badges with gradient background
- **Emojis:** Used extensively for visual emphasis (🎨, 🖼️, 💡, ✅, etc.)

## Content Structure

Task pages are structured instructional tutorials with:
- Hebrew headings using Heebo font from Google Fonts
- Multiple numbered sub-tasks with clear instructions
- Step-by-step guides with bullet points and ordered lists
- **RTL code blocks** containing Hebrew example prompts (direction: rtl, text-align: right)
- Tip boxes highlighting important information
- Checklist sections for task completion verification
- Visual examples with screenshots (where applicable)
- Emoji icons for visual emphasis and section identification

## Important Notes

- **RTL Directionality:** Maintain `dir="rtl"` for all Hebrew content
- **Code blocks:** Should be RTL (`direction: rtl; text-align: right`) since they contain Hebrew prompts
- **Embedded CSS:** All styling is within `<style>` tags in HTML files (no separate CSS files)
- **No Build Process:** Direct HTML editing, no compilation or preprocessing required
- **Public Access:** Site is viewable by anyone with the URL (no authentication)
- **Responsive Design:** All pages include mobile-friendly media queries (@media max-width: 768px)
- **Beginner-Friendly:** Content assumes no coding knowledge - designed for marketing managers
- **Lovable Platform Focus:** Instructions reference Lovable's specific features (Themes, Design View, Visual Edits)
- **Image Assets:** Screenshots stored in project root, referenced with relative paths
- **Video Upload:** Students should use direct MP4 upload to Lovable chat or YouTube/Vimeo (avoid GitHub)

## Design Consistency

When adding new task pages:
1. Copy the structure from [task1.html](task1.html) or [task2.html](task2.html)
2. Maintain the purple gradient theme
3. Use consistent class names: `.task-card`, `.tip-box`, `.checklist`, `.section`
4. Include the floating back button
5. Ensure RTL directionality for all Hebrew content
6. Add numbered circular badges for sub-tasks
7. Update [index.html](index.html) to add the new task card
