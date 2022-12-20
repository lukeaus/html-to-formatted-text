import striptags from 'striptags'
import { compose } from './utils'

const TAGS_TO_BREAK_ON = [
  'p',
  'div',
  'br',
  'hr',
  'title',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'ol',
  'ul',
  'li',
  'pre',
  'table',
  'th',
  'td',
  'blockquote',
  'header',
  'footer',
  'nav',
  'section',
  'summary',
  'aside',
  'article',
  'address'
]

const removeAllNonTagsToBreakOn = (html) => striptags(html, TAGS_TO_BREAK_ON)
const convertTagsToBreak = (html) => striptags(html, [], '\n')
const replaceSpaces = (html) => html.replace(/&nbsp;/g, ' ')
const replaceMultiNewLines = (html) => html.replace(/\n\n/g, '\n')
const removeLeadingNewLines = (html) => html.replace(/\n+$/, '')
const removeTrailingNewLines = (html) => html.replace(/^\n+/, '')

const replaceLt = (html) => html.replace(/&lt;/g, '<')
const replaceGt = (html) => html.replace(/&gt;/g, '>')
const replaceAmp = (html) => html.replace(/&amp;/g, '&')
const replaceQuot = (html) => html.replace(/&quot;/g, '"')
const replaceApos = (html) => html.replace(/&apos;/g, "'")
const replaceCent = (html) => html.replace(/&cent;/g, '¢')
const replacePound = (html) => html.replace(/&pound;/g, '£')
const replaceYen = (html) => html.replace(/&yen;/g, '¥')
const replaceEuro = (html) => html.replace(/&euro;/g, '€')
const replaceCopy = (html) => html.replace(/&copy;/g, '©')
const replaceReg = (html) => html.replace(/&reg;/g, '®')

const replaceHTMLEntities = compose(
  replaceLt,
  replaceGt,
  replaceAmp,
  replaceQuot,
  replaceApos,
  replaceCent,
  replacePound,
  replaceYen,
  replaceEuro,
  replaceCopy,
  replaceReg
)

module.exports = compose(
  removeTrailingNewLines,
  removeLeadingNewLines,
  replaceMultiNewLines,
  replaceHTMLEntities,
  replaceSpaces,
  convertTagsToBreak,
  removeAllNonTagsToBreakOn
)
