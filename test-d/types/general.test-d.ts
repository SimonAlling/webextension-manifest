import * as tsd from "tsd"

import {
    AllOrNothing,
    Either,
    NonEmptyArray,
    NothingFrom,
} from "../../types/general"


// AllOrNothing

type NumberAndStringOrNothing = AllOrNothing<{ n: number, s: string }>

tsd.expectAssignable<NumberAndStringOrNothing>({})
tsd.expectAssignable<NumberAndStringOrNothing>({ n: 0, s: "" })
tsd.expectNotAssignable<NumberAndStringOrNothing>({ n: 0 })
tsd.expectNotAssignable<NumberAndStringOrNothing>({ s: "" })

type HtmlAndCss = {
    html: string
    css: string
}

type AppWithOptionalEverything = AllOrNothing<HtmlAndCss & {
    run?: (html: string, css: string) => void
}>

type AppWithOptionalRun = AppWithOptionalEverything & HtmlAndCss

const css = ""
const html = ""
const run = (css: string, html: string): void => {
    // Bogus implementation because only the type is interesting.
    css + html;
}

tsd.expectAssignable<AppWithOptionalEverything>({})
tsd.expectAssignable<AppWithOptionalEverything>({ html, css })
tsd.expectAssignable<AppWithOptionalEverything>({ html, css, run })
tsd.expectNotAssignable<AppWithOptionalEverything>({ run })
tsd.expectNotAssignable<AppWithOptionalEverything>({ css, run })
tsd.expectNotAssignable<AppWithOptionalEverything>({ html, run })

tsd.expectAssignable<AppWithOptionalRun>({ html, css })
tsd.expectAssignable<AppWithOptionalRun>({ html, css, run })
tsd.expectNotAssignable<AppWithOptionalRun>({})
tsd.expectNotAssignable<AppWithOptionalRun>({ html })
tsd.expectNotAssignable<AppWithOptionalRun>({ css })
tsd.expectNotAssignable<AppWithOptionalRun>({ run })
tsd.expectNotAssignable<AppWithOptionalRun>({ html, run })
tsd.expectNotAssignable<AppWithOptionalRun>({ css, run })


// Either

type NumberXorString = Either<{ n: number }, { s: string }>

tsd.expectAssignable<NumberXorString>({ n: 0 })
tsd.expectAssignable<NumberXorString>({ s: "" })
tsd.expectNotAssignable<NumberXorString>({})
tsd.expectNotAssignable<NumberXorString>({ n: 5, s: "" })


// NothingFrom

type BadType = { bad: string, evil: number }

tsd.expectAssignable<NothingFrom<BadType>>({})
tsd.expectAssignable<any & NothingFrom<BadType>>({ good: "hello" })
tsd.expectNotAssignable<NothingFrom<BadType>>({ bad: "fak u" })
tsd.expectNotAssignable<NothingFrom<BadType>>({ evil: 666 })
tsd.expectNotAssignable<NothingFrom<BadType>>({ bad: "fak u", evil: 666 })
tsd.expectNotAssignable<any & NothingFrom<BadType>>({ bad: "fak u", evil: 666 })


// NonEmptyArray

tsd.expectAssignable<NonEmptyArray<number>>([1])
tsd.expectNotAssignable<NonEmptyArray<number>>([])
