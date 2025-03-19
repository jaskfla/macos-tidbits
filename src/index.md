---
title: macOS Tidbits
layout: base.liquid
---

When <kbd>⌘</kbd><kbd>↹</kbd>-ing between apps, mouse over an app and
release <kbd>⌘</kbd> to switch to that app without having to spam <kbd>↹</kbd>
or <kbd>⇧</kbd><kbd>↹</kbd>.

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
[make screenshots save somewhere else](https://macos-defaults.com/screenshots/location.html).

When using <kbd>⇧</kbd><kbd>⌘</kbd><kbd>4</kbd> to take screenshots, press
<kbd>Space</kbd> to take screenshots of windows. In this mode, you can also:

- hold <kbd>⌥</kbd> to take the window screenshot sans-shadow; and/or
- hold <kbd>⌘</kbd> to capture child views within a window—such as open/save
  dialogues, alert windows, et al.

Relatedly, you can
[make shadowless default](https://macos-defaults.com/screenshots/disable-shadow.html)
for window screenshots. Hold <kbd>⌥</kbd> to add the shadow.

## Menu Bar

<kbd>⌘</kbd>-drag to reorder icons in the Menu Bar.

Click and hold the Spotlight button in the Menu Bar to reset its location on
screen.

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

When using drag & drop to copy/move a file, hold <kbd>⌘</kbd> to force Finder to
**move** the file, or hold <kbd>⌥</kbd> to force Finder to
<strong style="cursor: copy">copy</strong> the file. (Yes, you can
<kbd>⌥</kbd>-drag to duplicate a file within a single folder.)[^finderdragdrop]

[^finderdragdrop]:
    By default, macOS will move the file if you’re dragging within the same
    drive (well, technically, the same partition). If you drag to a location on
    a different drive, Finder will copy by default. This is when these modifiers
    come in handy.

In Finder, hold <kbd>⌥</kbd> to **Get Info** on all selected items in one Info
window, rather than in a barrage of individual windows. This also works with
<kbd>⌥</kbd><kbd>⌘</kbd><kbd>I</kbd> (instead of <kbd>⌘</kbd><kbd>I</kbd>).

In any Save sheet, drag and drop a folder onto the sheet to navigate there in
the Save sheet. Drag and drop a file to navigate there _and_ prepopulate the
“Save As” field with its filename.

## Custom icons

Change the icon of any Finder item: Copy any image or `.icns` file[^icns],
**Get&nbsp;Info** on any item in Finder, click to select the icon in the top
left, and paste! Or simply drag & drop and image or `.icns` onto the icon.

[^icns]:
    `.icns` is the
    <a href="https://en.wikipedia.org/wiki/Apple_Icon_Image_format" target="_blank">Apple
    Icon Image format</a>, which is used for icons macOS-wide. It’s basically
    just a container of an icon at different sizes. Why not just scale one
    image? Designers can use
    <a href="https://developers.google.com/fonts/docs/material_symbols#opsz_axis" target="_blank"><em>optical
    sizing</em></a> to optimise the “same” icon for display at different sizes.

![](https://cdn.discordapp.com/attachments/818660821004845060/962141177077972993/Screenshot_2022-04-09T120319.png?ex=67dab30c&is=67d9618c&hm=8a4468473c223e5d631ab1b577e907ad8d619468f3de9910b6b2be6cfbf5bd37)

Relatedly, you can even copy the icon from one file’s **Info** panel to paste
into another.

Also relatedly, a bunch of the system icons live in
<code style="word-break: break-all">/System/Library/CoreServices/CoreTypes.bundle/Contents/Resources/</code>.

![](https://cdn.discordapp.com/attachments/818660821004845060/962141380434616320/Screenshot_2022-04-09T120407.png?ex=67dab33c&is=67d961bc&hm=c0841ebdfbc0a84a0918e757f22755e3550a2032fba278e7c6e1a75ef600b05e)

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

Drag and drop a folder onto the Terminal icon to open a terminal directly to
that directory.[^openin]

[^openin]:
    This is just a special case of dropping a file (or folder) onto an app icon
    to open it in that app (either in the Dock, or in Finder).

Relatedly, <kbd>⌘</kbd>-drag a folder onto a Terminal window to `cd` there
without typing anything.[^iterm]

[^iterm]:
    This also works in [iTerm](https://iterm2.com). Though Terminal is a
    perfectly adequate terminal emulator, if you'd like a few more bells and
    whistles, iTerm is worth looking at. As is [Warp](https://www.warp.dev), but
    as of March&nbsp;2025, Warp doesn’t support this <kbd>⌘</kbd>-drag shortcut.
    Criminal.

## Network quality

Test your network capacity without any third party things (like
<a href="https://www.speedtest.net" target="_blank">speedtest.net</a> or
<a href="https://www.fast.com" target="_blank">fast.com</a>) by running
`networkQuality` from the command line, optionally using the **`-v`** flag for
~~_verbose output_~~ _very nerdy details_.

```sh
> networkQuality

==== SUMMARY ====
Uplink capacity: 34.685 Mbps
Downlink capacity: 225.857 Mbps
Responsiveness: Low (485.706 milliseconds | 123 RPM)
Idle Latency: 38.958 milliseconds | 1540 RPM
```

<!-- ![](https://cdn.discordapp.com/attachments/818660821004845060/965064537030135818/Code_Snippet_2022-04-17T133926.png?ex=67dac9a3&is=67d97823&hm=b2fff70f7871625c6d9a48c7e8967e83f39c7e3667df325330de0308eb0dc37e) -->
