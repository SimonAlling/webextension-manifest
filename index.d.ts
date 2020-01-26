import { CssColorString } from "./types/css"
import {
    AllOrNothing,
    Either,
    NonEmptyArray,
} from "./types/general";



type Manifest = {
    author                    ?: Author
    background                ?: Background
    browser_action            ?: BrowserAction
    browser_specific_settings ?: BrowserSpecificSettings
    chrome_settings_overrides ?: ChromeSettingsOverrides
    chrome_url_overrides      ?: ChromeUrlOverrides
    commands                  ?: Commands
    content_scripts           ?: ContentScripts
    content_security_policy   ?: ContentSecurityPolicy
    /**
     * This key must be present if the extension contains the _locales directory, and must be absent otherwise. It identifies a subdirectory of _locales, and this subdirectory will be used to find the default strings for your extension.
     */
    default_locale            ?: DefaultLocale
    description               ?: Description
    developer                 ?: Developer
    devtools_page             ?: DevtoolsPage
    dictionaries              ?: Dictionaries
    externally_connectable    ?: ExternallyConnectable
    homepage_url              ?: HomepageUrl
    icons                     ?: Icons
    incognito                 ?: Incognito
    manifest_version           : ManifestVersion
    name                       : Name
    offline_enabled           ?: OfflineEnabled
    omnibox                   ?: Omnibox
    optional_permissions      ?: OptionalPermissions
    // options_page omitted because it is deprecated in favor of `options_ui`
    options_ui                ?: OptionsUi
    page_action               ?: PageAction
    permissions               ?: Permissions
    protocol_handlers         ?: ProtocolHandlers
    short_name                ?: ShortName
    sidebar_action            ?: SidebarAction
    theme                     ?: Theme
    theme_experiment          ?: ThemeExperiment
    user_scripts              ?: UserScripts
    version                    : Version
    version_name              ?: VersionName
    web_accessible_resources  ?: WebAccessibleResources
}

export default Manifest



export type Author = string

export type Background = {
    persistent?: boolean
} & Either<
    { scripts?: string[] },
    // "If you use [`page`], you can not specify background scripts using `scripts`, but you can include your own scripts from the page, just like in a normal web page."
    // https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background
    { page?: string }
>

// "The `browser_action` key is an object that may have any of the following properties, all optional:"
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action
export type BrowserAction = {
    browser_style ?: boolean
    default_area  ?: "menupanel" | "navbar" | "personaltoolbar" | "tabstrip"
    default_icon  ?: string | IconsObject
    default_popup ?: string
    default_title ?: string
    theme_icons   ?: NonEmptyArray<ThemeIcons> // "If this property is present, it's an array containing at least one `ThemeIcons` object."
}

export type PageAction = {
    browser_style ?: boolean
    default_icon  ?: string | IconsObject
    default_popup ?: string
    default_title ?: string
    pinned        ?: boolean
    show_matches  ?: string[]
} & AllOrNothing<{
    show_matches   : string[]
    /**
     * Note that page actions are always hidden by default unless `show_matches` is given. Therefore it only makes sense to include `hide_matches` if `show_matches` is also given [...].
     */
    hide_matches  ?: string[]
}>

type ThemeIcons = {
    dark   : string
    light  : string
    size   : IconSize
}

export type BrowserSpecificSettings = {
    [ BrowserName in string ]: {
        [ Key in string ]: boolean | number | string
    }
}

export type ChromeSettingsOverrides = {
    homepage        ?: string
    search_provider ?: SearchProvider
}

type SearchProvider = {
    alternate_urls          ?: string[]
    encoding                ?: string
    favicon_url             ?: string
    image_url               ?: string
    image_url_post_params   ?: string
    instant_url             ?: string
    instant_url_post_params ?: string
    is_default              ?: boolean
    keyword                 ?: string
    name                     : string
    prepopulated_id         ?: string
    search_url               : string
    search_url_post_params  ?: string
    suggest_url             ?: string
    suggest_url_post_params ?: string
}

export type ChromeUrlOverrides = {
    bookmarks ?: string
    history   ?: string
    newtab    ?: string
}

export type Commands = {
    [ Name in string ]: {
        description?: string
        suggested_key: {
            android  ?: string
            chromeos ?: string
            default  ?: string
            ios      ?: string
            linux    ?: string
            mac      ?: string
            windows  ?: string
        }
    }
}

export type ContentScripts = ContentScript[]

type ContentScript = {
    all_frames        ?: boolean
    css               ?: string[]
    exclude_globs     ?: string[]
    exclude_matches   ?: string[]
    include_globs     ?: string[]
    js                ?: string[]
    match_about_blank ?: boolean
    matches            : string[]
    run_at            ?: RunAt
}

type RunAt = "document_start" | "document_end" | "document_idle"

export type ContentSecurityPolicy = string

export type DefaultLocale = string

export type Description = string

export type Developer = {
    name ?: string
    url  ?: string
}

export type DevtoolsPage = string

export type Dictionaries = {
    [ Locale in string ]: string
}

export type ExternallyConnectable = {
    accepts_tls_channel_id ?: boolean // https://developer.chrome.com/apps/manifest/externally_connectable
    ids                    ?: string[]
    matches                ?: string[]
}

export type HomepageUrl = string

export type Icons = IconsObject

type IconsObject = {
    // "The name of each property is the icon's height in pixels, and must be convertible to an integer."
    // https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action
    [ K in IconSize ]?: string
}

type IconSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100 | 101 | 102 | 103 | 104 | 105 | 106 | 107 | 108 | 109 | 110 | 111 | 112 | 113 | 114 | 115 | 116 | 117 | 118 | 119 | 120 | 121 | 122 | 123 | 124 | 125 | 126 | 127 | 128 | 129 | 130 | 131 | 132 | 133 | 134 | 135 | 136 | 137 | 138 | 139 | 140 | 141 | 142 | 143 | 144 | 145 | 146 | 147 | 148 | 149 | 150 | 151 | 152 | 153 | 154 | 155 | 156 | 157 | 158 | 159 | 160 | 161 | 162 | 163 | 164 | 165 | 166 | 167 | 168 | 169 | 170 | 171 | 172 | 173 | 174 | 175 | 176 | 177 | 178 | 179 | 180 | 181 | 182 | 183 | 184 | 185 | 186 | 187 | 188 | 189 | 190 | 191 | 192 | 193 | 194 | 195 | 196 | 197 | 198 | 199 | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 209 | 210 | 211 | 212 | 213 | 214 | 215 | 216 | 217 | 218 | 219 | 220 | 221 | 222 | 223 | 224 | 225 | 226 | 227 | 228 | 229 | 230 | 231 | 232 | 233 | 234 | 235 | 236 | 237 | 238 | 239 | 240 | 241 | 242 | 243 | 244 | 245 | 246 | 247 | 248 | 249 | 250 | 251 | 252 | 253 | 254 | 255 | 256

export type Incognito = "spanning" | "split" | "not_allowed"

// "Currently, this must always be 2."
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version
export type ManifestVersion = 2

export type Name = string

export type OfflineEnabled = boolean

export type Omnibox = {
    keyword  : string
}

export type OptionalPermissions = Permissions

export type OptionsUi = {
    browser_style ?: boolean
    open_in_tab   ?: boolean
    page           : string
}

export type Permissions = Array<ApiPermission | string>

type ApiPermission = "activeTab" | "alarms" | "background" | "bookmarks" | "browserSettings" | "browsingData" | "captivePortal" | "clipboardRead" | "clipboardWrite" | "contentSettings" | "contextMenus" | "contextualIdentities" | "cookies" | "debugger" | "dns" | "downloads" | "downloads.open" | "find" | "geolocation" | "history" | "identity" | "idle" | "management" | "menus" | "menus.overrideContext" | "nativeMessaging" | "notifications" | "pageCapture" | "pkcs11" | "privacy" | "proxy" | "search" | "sessions" | "storage" | "tabHide" | "tabs" | "theme" | "topSites" | "unlimitedStorage" | "webNavigation" | "webRequest" | "webRequestBlocking"

export type ProtocolHandlers = ProtocolHandler[]

type ProtocolHandler = {
    protocol     : StandardProtocol | string
    name         : string
    uriTemplate  : string
}

type StandardProtocol = "bitcoin" | "dat" | "dweb" | "geo" | "gopher" | "im" | "ipfs" | "ipns" | "irc" | "ircs" | "magnet" | "mailto" | "mms" | "news" | "nntp" | "sip" | "sms" | "smsto" | "ssb" | "ssh" | "tel" | "urn" | "webcal" | "wtai" | "xmpp"

export type ShortName = string

export type SidebarAction = {
    browser_style   ?: boolean
    default_icon    ?: string | IconsObject
    default_panel    : string
    default_title   ?: string
    open_at_install ?: boolean
}

export type Theme = {
    colors: ThemeColors
    images?: {
        // headerURL omitted because it has been deprecated in favor of `theme_frame`
        // "[`theme_frame` is optional] in desktop Firefox 60 onwards. [...] In Firefox for Android, `headerURL` or `theme_frame` must be specified."
        theme_frame?: string
        additional_backgrounds?: string[]
    }
    properties?: ThemeProperties
}

type ThemeColors = {
    /**
     * Deprecated. Use `frame` and `frame_inactive` instead.
     */
    accentcolor                  ?: ThemeColor
    bookmark_text                ?: ThemeColor // alias for `toolbar_text`
    button_background_active     ?: ThemeColor
    button_background_hover      ?: ThemeColor
    icons                        ?: ThemeColor
    icons_attention              ?: ThemeColor
    frame                        ?: ThemeColor
    frame_inactive               ?: ThemeColor
    ntp_background               ?: ThemeColor
    ntp_text                     ?: ThemeColor
    popup                        ?: ThemeColor
    popup_border                 ?: ThemeColor
    popup_highlight              ?: ThemeColor
    popup_highlight_text         ?: ThemeColor
    popup_text                   ?: ThemeColor
    sidebar                      ?: ThemeColor
    sidebar_border               ?: ThemeColor
    sidebar_highlight            ?: ThemeColor
    sidebar_highlight_text       ?: ThemeColor
    sidebar_text                 ?: ThemeColor
    tab_background_separator     ?: ThemeColor
    tab_background_text          ?: ThemeColor
    tab_line                     ?: ThemeColor
    tab_loading                  ?: ThemeColor
    tab_selected                 ?: ThemeColor
    tab_text                     ?: ThemeColor
    /**
     * Deprecated. Use `tab_background_text` instead.
     */
    textcolor                    ?: ThemeColor
    toolbar                      ?: ThemeColor
    toolbar_bottom_separator     ?: ThemeColor
    toolbar_field                ?: ThemeColor
    toolbar_field_border         ?: ThemeColor
    toolbar_field_border_focus   ?: ThemeColor
    toolbar_field_focus          ?: ThemeColor
    toolbar_field_highlight      ?: ThemeColor
    toolbar_field_highlight_text ?: ThemeColor
    toolbar_field_separator      ?: ThemeColor
    toolbar_field_text           ?: ThemeColor
    toolbar_field_text_focus     ?: ThemeColor
    toolbar_text                 ?: ThemeColor
    toolbar_top_separator        ?: ThemeColor
    toolbar_vertical_separator   ?: ThemeColor
}

type ThemeColor = CssColorString

type ThemeProperties = {
    additional_backgrounds_alignment ?: BackgroundAlignment[]
    additional_backgrounds_tiling    ?: BackgroundTiling[]
}

type BackgroundAlignment = "bottom" | "center" | "left" | "right" | "top" | "center bottom" | "center center" | "center top" | "left bottom" | "left center" | "left top" | "right bottom" | "right center" | "right top"

type BackgroundTiling = "no-repeat" | "repeat" | "repeat-x" | "repeat-y"

export type ThemeExperiment = {
    colors      : StringToStringMap
    images     ?: StringToStringMap
    properties ?: StringToStringMap
    stylesheet ?: string
}

type StringToStringMap = {
    [K in string]: string
}

export type UserScripts = {
    api_script: string
}

export type Version = string

export type VersionName = string

export type WebAccessibleResources = string[]
