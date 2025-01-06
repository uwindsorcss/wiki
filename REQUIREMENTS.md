# Article Requirements

These are the stylistic and informational requirements for articles

## Table of contents

- [Last Update Date](#last-update-date)
    - [Articles With No Sections](#articles-with-no-sections)
    - [Articles With Sections](#articles-with-sections)
- [Citations](#citations)
    - [Whole Article](#whole-article)
    - [Sections](#sections)

## Last Update Date

As most of this information is time sensitive, listing the last updated date is important.

Dates need to be in the format `yyyy/mm/dd` for example, `2022/12/25`

### Articles With No Sections

**Use Case:** If you need to date an article without sections

Put a `_Last updated on <date>_` under the metadata table.

**Example**

```markdown
---
id: example
title: Example
slug: /example
---

_Last updated on 2020/09/14_
```

### Articles With Sections

**Use Case:** If you need to date an article with sections

Because there are many sections, please only date h1 sections(`#`) with when it was last updated.

Put a `_Last updated on <date>_` under the section header.

**Example**

```markdown
---
id: example
title: Example
slug: /example
---

# Example

_Last updated on 2020/09/14_

## Example Sub header

some words

### Example Sub Sub header

some other words

# Example 2

_Last updated on 2019/02/14_
```

## Citations

As most of this information is factual, citing of sources is needed.

Primary sources are preferred

Citations are done in the `Citations` section at the bottom of the article

The Citations Section has a `h1` or `#` tag. It is also known as the largest type of header

### Whole Article

**Use Case:** If you need to cite something not under a section

Citations for the whole article are done by putting sources in the `Citations` section

**Example**

```markdown
---
id: example
title: Example
slug: /example
---

some example words

# Citations

https://example.com/example-source
```

### Sections

**Use Case:** If you need to cite a section

Citations for sections are done under the `Citations` section under another section with the name of the section you're trying to cite

**Example**

```markdown
---
id: example
title: Example
slug: /example
---

some example words

## Some sub section

some other example words

# Citations

https://example.com/example-source

## Some sub section

https://example.com/another-example-source
```
