import * as tsd from "tsd"

import * as M from ".."

// Many expectedly valid values in this file are examples from MDN.

const valid = tsd.expectAssignable
const invalid = tsd.expectNotAssignable


valid<M.Author>("Simon Alling")


valid<M.Background>({})
valid<M.Background>({ scripts: [] })
valid<M.Background>({ page: "" })
valid<M.Background>({ persistent: true, scripts: [] })
valid<M.Background>({ persistent: true, page: "" })
invalid<M.Background>({ scripts: [], page: "" })
invalid<M.Background>({ persistent: true, scripts: [], page: "" })


valid<M.BrowserAction>({
    browser_style: true,
    default_icon: {
        16: "button/geo-16.png",
        32: "button/geo-32.png",
    },
    default_title: "Whereami?",
    default_popup: "popup/geo.html",
    theme_icons: [
        {
            light: "icons/geo-16-light.png",
            dark: "icons/geo-16.png",
            size: 16,
        },
        {
            light: "icons/geo-32-light.png",
            dark: "icons/geo-32.png",
            size: 32,
        },
    ],
})


valid<M.BrowserSpecificSettings>({
    gecko: {
        id: "addon@example.com",
        strict_min_version: "42.0",
    },
})


valid<M.ChromeSettingsOverrides>({
    homepage: "https://developer.mozilla.org/",
})
valid<M.ChromeSettingsOverrides>({
    search_provider: {
        name: "Discogs",
        search_url: "https://www.discogs.com/search/?q={searchTerms}",
        keyword: "disc",
        favicon_url: "https://www.discogs.com/favicon.ico",
    },
})
valid<M.ChromeSettingsOverrides>({
    homepage: "https://developer.mozilla.org/",
    search_provider: {
        name: "Discogs",
        search_url: "https://www.discogs.com/search/?q={searchTerms}",
        keyword: "disc",
        favicon_url: "https://www.discogs.com/favicon.ico",
    },
})


valid<M.ChromeUrlOverrides>({
    newtab: "my-new-tab.html",
})


valid<M.Commands>({
    "toggle-feature": {
        suggested_key: {
            default: "Ctrl+Shift+Y",
        },
        description: "Send a 'toggle-feature' event",
    },
})
valid<M.Commands>({
    "toggle-feature": {
        suggested_key: {
            default: "Alt+Shift+U",
            linux: "Ctrl+Shift+U",
        },
        description: "Send a 'toggle-feature' event",
    },
    "do-another-thing": {
        suggested_key: {
            default: "Ctrl+Shift+Y",
        },
    },
})


valid<M.ContentScripts>([
    {
        matches: ["*://*.mozilla.org/*"],
        js: ["borderify.js"],
    },
])
valid<M.ContentScripts>([
    {
        exclude_matches: ["*://developer.mozilla.org/*"],
        matches: ["*://*.mozilla.org/*"],
        js: ["jquery.js", "borderify.js"],
    },
])


valid<M.ContentSecurityPolicy>("script-src 'self' https://example.com; object-src 'self'")
valid<M.ContentSecurityPolicy>("script-src 'self' https://*.jquery.com; object-src 'self'")
valid<M.ContentSecurityPolicy>("script-src 'self' 'unsafe-eval'; object-src 'self';")
valid<M.ContentSecurityPolicy>("script-src 'self' 'sha256-qznLcsROx4GACP2dm0UCKCzCG+HiZ1guq6ZZDob/Tng='; object-src 'self'")


valid<M.DefaultLocale>("en")


valid<M.Description>("A cool extension")


valid<M.Developer>({
    name: "Walt Whitman",
    url: "https://en.wikipedia.org/wiki/Walt_Whitman",
})


valid<M.DevtoolsPage>("devtools/my-page.html")


valid<M.Dictionaries>({
    "en-US": "dictionaries/en-US.dic",
})


valid<M.ExternallyConnectable>({
    ids: [
        "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
        "cccccccccccccccccccccccccccccccc",
    ],
    matches: [
        "https://example1.com/*",
        "*://*.example2.com/*",
    ],
})


valid<M.HomepageUrl>("https://github.com/mdn/webextensions-examples/tree/master/beastify")


valid<M.Icons>({
    48: "icon.png",
    96: "icon@2x.png",
})


valid<M.Incognito>("spanning")
valid<M.Incognito>("split")
valid<M.Incognito>("not_allowed")
invalid<M.Incognito>("")


valid<M.ManifestVersion>(2)
invalid<M.ManifestVersion>(1)


valid<M.Name>("My Extension")


valid<M.OfflineEnabled>(true)
valid<M.OfflineEnabled>(false)
invalid<M.OfflineEnabled>("true")
invalid<M.OfflineEnabled>("false")


valid<M.Omnibox>({
    keyword: "mdn",
})


valid<M.OptionalPermissions>([ "*://developer.mozilla.org/*" ])
valid<M.OptionalPermissions>([ "tabs" ])
valid<M.OptionalPermissions>([ "*://developer.mozilla.org/*", "tabs" ])


valid<M.OptionsUi>({
    browser_style: false,
    open_in_tab: true,
    page: "options/options.html",
})


valid<M.PageAction>({
    default_icon: {
        19: "button/geo-19.png",
        38: "button/geo-38.png",
    },
})
valid<M.PageAction>({
    default_icon: {
        19: "button/geo-19.png",
        38: "button/geo-38.png",
    },
    default_title: "Whereami?",
    default_popup: "popup/geo.html",
})
// "Note that page actions are always hidden by default unless `show_matches` is given. Therefore it only makes sense to include [`hide_matches`] if `show_matches` is also given [...]."
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/page_action
valid<M.PageAction>({})
valid<M.PageAction>({ show_matches: [] })
valid<M.PageAction>({ show_matches: [], hide_matches: [] })
invalid<M.PageAction>({ hide_matches: [] })


valid<M.Permissions>([ "*://developer.mozilla.org/*" ])
valid<M.Permissions>([ "tabs" ])
valid<M.Permissions>([ "*://developer.mozilla.org/*", "tabs" ])


valid<M.ProtocolHandlers>([
    {
        protocol: "magnet",
        name: "Magnet Extension",
        uriTemplate: "https://example.com/#!/%s",
    },
])


valid<M.ShortName>("MyExt")


valid<M.SidebarAction>({
    default_icon: {
        16: "button/geo-16.png",
        32: "button/geo-32.png",
    },
    default_title: "My sidebar",
    default_panel: "sidebar/sidebar.html",
    open_at_install: true,
})
valid<M.SidebarAction>({
    default_icon: "sidebar.svg",
    default_title: "My sidebar!",
    default_panel: "sidebar.html",
    browser_style: true,
})


valid<M.Theme>({
    images: {
        theme_frame: "images/sun.jpg",
    },
    colors: {
        frame: "#CF723F",
        tab_background_text: "#000",
    },
})
valid<M.Theme>({
    images: {
        additional_backgrounds: [ "images/left.png" , "images/middle.png", "images/right.png" ],
    },
    properties: {
        additional_backgrounds_alignment: [ "left top" , "top", "right top" ],
    },
    colors: {
        frame: "blue",
        tab_background_text: "#ffffff",
    },
})
valid<M.Theme>({
    images: {
        additional_backgrounds: [ "images/logo.png" ],
    },
    properties: {
        additional_backgrounds_alignment: [ "top" ],
        additional_backgrounds_tiling: [ "repeat" ],
    },
    colors: {
        frame: "green",
        tab_background_text: "#000",
    },
})
valid<M.Theme>({
    images: {
        theme_frame: "weta.png",
    },
    colors: {
       frame: "darkgreen",
       tab_background_text: "white",
       toolbar: "blue",
       bookmark_text: "cyan",
       toolbar_field: "orange",
       toolbar_field_border: "white",
       toolbar_field_text: "green",
       toolbar_top_separator: "red",
       toolbar_bottom_separator: "white",
       toolbar_vertical_separator: "white",
   },
})


valid<M.ThemeExperiment>({
    stylesheet: "style.css",
    colors: {
        popup_affordance: "--arrowpanel-dimmed",
    },
    images: {
        theme_toolbar: "--toolbar-bgimage",
    },
    properties: {
        toolbar_image_alignment: "--toolbar-bgalignment",
    },
})


valid<M.UserScripts>({
    api_script: "apiscript.js",
})


valid<M.Version>("1.0.0")


valid<M.VersionName>("0.1 beta")


valid<M.WebAccessibleResources>(["images/my-image.png"])
