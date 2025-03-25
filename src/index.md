---
title: macOS Tidbits
layout: base.liquid
---

When <kbd>⌘</kbd><kbd>↹</kbd>-ing between apps, mouse over an app and release
<kbd>⌘</kbd> to switch to that app without having to spam <kbd>↹</kbd> or
<kbd>⇧</kbd><kbd>↹</kbd>.

<kbd>⌥</kbd><kbd>⌘</kbd>-click an app in the Dock to switch to that app _and
hide all other apps_ at the same time. This is great when screen sharing.

Hold <kbd>⌘</kbd> to interact with background windows _without bringing them
into focus_.

## Text selection

When using the cursor to select text, double-click to select a words.
Triple-click to select a paragraph.

Relatedly, double-click and drag to select word-by-word. Triple-click and drag
to select paragraph-by-paragraph.

## Right-click with keyboard

<kbd>⌃</kbd><kbd>⏎</kbd> to right-click whatever is currently focused. (Though,
strictly speaking, there’s no clicking involved here.)

## Screenshots

When taking screenshots, hold <kbd>⌃</kbd> to copy the image instead saving it
to your desktop.

Relatedly, you can
<a href="https://macos-defaults.com/screenshots/location.html" rel="external" target="_blank">make
screenshots save somewhere else</a>.

When using <kbd>⇧</kbd><kbd>⌘</kbd><kbd>4</kbd> to take screenshots, press
<kbd>space</kbd> to capture by window. In this mode, you can also:

- hold <kbd>⌥</kbd> to take the window screenshot sans-shadow; and/or
- hold <kbd>⌘</kbd> to capture child views within a window (such as open/save
  dialogues, alert windows, et al).

Relatedly, you can
<a href="https://macos-defaults.com/screenshots/disable-shadow.html" rel="external" target="_blank">make
shadowless default</a> for window screenshots. Hold <kbd>⌥</kbd> to add the
shadow.

## Menu Bar

<kbd>⌘</kbd>-drag to reorder icons in the Menu Bar.

Click and hold the Spotlight button in the Menu Bar to reset its location on
screen.

Any self-respecting Mac app opens the **Help** menu when you press
<kbd>⌘</kbd><kbd>?</kbd>. (Safari, for some god-forsaken reason opens the
[Tips](x-apple-tips://) app instead. 🤬)

## Function keys

Hold <kbd>⇧</kbd><kbd>⌥</kbd> to adjust display brightness, volume or keyboard
brightness in quarter-increments. This is useful when the lowest click is still
too bright or loud.

A quick way to access your
[Displays](x-apple.systempreferences:com.apple.Displays-Settings.extension)
settings is to <kbd>⌥</kbd>-press either <kbd>brightness up</kbd> or
<kbd>brightness down</kbd>.

- Same goes for
  [Sound](x-apple.systempreferences:com.apple.Sound-Settings.extension)
  settings: <kbd>⌥</kbd>-press <kbd>mute</kbd> or <kbd>volume up/down</kbd>.
- Again with
  [Keyboard](x-apple.systempreferences:com.apple.Keyboard-Settings.extension)
  settings: <kbd>⌥</kbd><kbd>keyboard brightness up/down</kbd>.

(Works with Touch Bar too! <kbd>⌥</kbd>-tap the corresponding button in the
Control Strip.)

## Finder

When using
{% footnoteref 'finder-drag-drop', 'By default, macOS will move the file if you’re dragging within the same drive (well, technically, the same partition). If you drag to a location on a different drive, Finder will copy by default. This is when these modifiers come in handy.' %}
drag & drop to copy/move a file{% endfootnoteref %}, hold <kbd>⌘</kbd> to force
Finder to **move** the file, or hold <kbd>⌥</kbd> to force Finder to
<strong style="cursor: copy">copy</strong> the file. (Yes, you can
<kbd>⌥</kbd>-drag to duplicate a file within a single folder.)

In Finder, hold <kbd>⌥</kbd> to **Get Info** on all selected items in one
<i>Inspector</i> window, rather than in a barrage of individual <i>Info</i>
windows. This also works with <kbd>⌥</kbd><kbd>⌘</kbd><kbd>I</kbd> (instead of
<kbd>⌘</kbd><kbd>I</kbd>).

In any Save sheet, drag and drop a folder onto the sheet to navigate there in
the Save sheet. Drag and drop a file to navigate there _and_ prepopulate the
<i>Save As</i> field with its filename.

## Tabs

Middle-click a tab to close it.

Hold <kbd>⌥</kbd> when closing a tab to close all other tabs instead.

## Column views

In any standard column view (e.g.&nbsp;Finder), hold <kbd>⌥</kbd> to resize all
columns equally.

<picture>
  <source src="/images/column-view-resize.gif" type="image/gif">
  <img
    alt="Screen recording of every column in a Finder window being simultaneously resized while the cursor is dragged left and right."
    src="/images/column-view-resize.gif"
    width="2000"
    height="675" />
</picture>

## Custom icons

Change the icon of any Finder item: Copy any image or
{% footnoteref 'icns', '<code>.icns</code> is the <a href="https://en.wikipedia.org/wiki/Apple_Icon_Image_format" rel="external" target="_blank">Apple Icon Image format</a>, which is used for icons macOS-wide. It’s basically just a container of an icon at different sizes. Why not just scale one image? Designers can use <a href="https://developers.google.com/fonts/docs/material_symbols#opsz_axis" rel="external" target="_blank"><i>optical sizing</i></a> to optimise the “same” icon for display at different sizes.' %}`.icns`
file{% endfootnoteref %}, **Get&nbsp;Info** on any item in Finder, click to
select the icon in the top left, and paste! Or simply drag & drop and image or
`.icns` onto the icon.

<picture>
  <source src="/images/custom-icons.png" type="image/png">
  <img
    alt="Screenshot of an Info pane for a removable drive. The file icon in the top left has a blue outline, indicating it is selected. The screenshot is annotated with an arrow pointing to the file icon, with the label “Drag and drop; or click then command-V”."
    src="/images/custom-icons.png"
    width="1000"
    height="337.5"
    style="--flow-space: 0" />
</picture>

Relatedly, you can even copy the icon from one file’s <i>Info</i> panel to paste
into another.

Also relatedly, a bunch of the system icons live in
<code style="word-break: break-all">/System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/</code>.

<picture>
  <source src="/images/folder-of-icons.png" type="image/png">
  <img
    alt="Screenshot of a folder in Finder called “Resources” full, showing a few dozen of the 312 items in that folder. All the visible files are ICNS files of icons used throughout macOS, such as those for FileVault, the Downloads Folder, a font file, a kernel extension, a Time Machine drive, and more."
    src="/images/folder-of-icons.png"
    width="1024"
    height="703" />
</picture>

## Spelling dictionary

When macOS says you’ve spelled something wrong, and you right-click then choose
**Learn Spelling**, it just adds the word to the
`~/Library/Spelling/LocalDictionary` file. If you’ve added a word to your
dictionary that you no longer want, just open up the file and delete the word.

Relatedly, <kbd>⇧</kbd><kbd>⌘</kbd><kbd>G</kbd> in any Finder window to paste to
go straight to the right folder.

## Dock

<kbd>⌘</kbd>-click items in the Dock to reveal them in Finder.

Don’t want to accidentally add/remove apps from your Dock? Lock its contents by
running:

```sh
defaults write com.apple.dock contents-immutable -bool true && killall Dock
```

Set it back to normal with:

```sh
defaults delete com.apple.dock contents-immutable && killall Dock
```

## Terminal

{% footnoteref 'open-in', 'This is just a special case of dropping a file (or folder) onto an app icon to open it in that app (either in the Dock, or in Finder).' %}Drag
and drop a folder onto the Terminal icon to open a terminal directly to that
directory.{% endfootnoteref %}

Relatedly,
{% footnoteref 'iterm', 'This also works in <a href="https://iterm2.com" rel="external" target="_blank">iTerm<a>. Though Terminal is a perfectly adequate terminal emulator, if you’d like a few more bells and whistles, iTerm is worth looking at. As is <a href="https://www.warp.dev" rel="external" target="_blank">Warp</a>, but as of March&nbsp;2025, Warp doesn’t support this <kbd>⌘</kbd>-drag shortcut. Criminal.' %}<kbd>⌘</kbd>-drag
a folder onto a Terminal window to `cd` there without typing
anything.{% endfootnoteref%}

## Network quality

Test your network capacity without any third party things (like
<a href="https://www.speedtest.net" rel="external" target="_blank">speedtest.net</a>
or <a href="https://www.fast.com" rel="external" target="_blank">fast.com</a>)
by running `networkQuality` from the command line, optionally using the **`-v`**
flag for ~~_verbose output_~~ _very nerdy details_.

```sh
> networkQuality

==== SUMMARY ====
Uplink capacity: 34.685 Mbps
Downlink capacity: 225.857 Mbps
Responsiveness: Low (485.706 milliseconds | 123 RPM)
Idle Latency: 38.958 milliseconds | 1540 RPM
```

<!-- ![](https://cdn.discordapp.com/attachments/818660821004845060/965064537030135818/Code_Snippet_2022-04-17T133926.png?ex=67dac9a3&is=67d97823&hm=b2fff70f7871625c6d9a48c7e8967e83f39c7e3667df325330de0308eb0dc37e) -->
