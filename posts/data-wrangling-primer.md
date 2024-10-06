---
title: 'A Data Wrangling Primer'
subtitle: 'Everything you need to get started — 0 to 60.'
date: '2024-09-10'
image: '/imgs/data-wrangling-primer-main.jpg'
imagealt: 'A landscape photo of a rocky beach, haze in the distance.'
---
This entry seeks to provide a cursory overview of essential tools used for manipulating data on the fly. I'm writing this primarily for people who are interested in data engineering, so if that's you then hopefully this primer works out for you. In this novice's guide, I'll be covering a select few tools that I find myself using near daily: `grep`, `sed`, `awk`, and `jq`. We won't go too in depth, but just enough that you're able to start changing the way you think about handling data via the command line. That being said, this guide is written with the assumption that you are familiar with basic CLI utilities, and are comfortable with navigating the file system via command line. 

# Regular Expressions
Regular expressions (also called `regex`) are a way of selecting/filtering parts of some textual input via pattern matching. It's very handy, and quick to learn the basics. If you've ever used the * wildcard when using a search engine, you are already familiar with some basic pattern matching concepts!

## Basic Pattern Matching
The core of `regex` is using patterns to locate "matches." The most basic of patterns are made with regular characters. In the example below, we use the pattern `cat` to match any instances of the word "cat." Note how we also catch the first part of plural instances.

```plaintext /cat/2-4#yellow
regex pattern: cat
---
1 cat, 2 cats, 3 cats.
```

There's also **metacharacters**, which are used to do build more fancy patterns than ones solely composed of regular characters. The rest of this section will be spent on metacharacters, but to whet your appetite: the `.` character. This character, a single period, is used to match *any* character. 

```plaintext /ran/#yellow /run/#yellow
regex pattern: r.n
---
I ran across the field, but won't run back.
```

Metacharacters only get more powerful from here. We can match single characters across a specific set of possible characters via `[` and `]`. 

```plaintext /atone/#yellow /alone/#yellow
regex pattern: a[tl]one
---
atone and alone will be matched.
```

By specifying specific characters, we limit the scope of possible matches compared to when we were using `.`, the "match everything" character. This is handy for ensuring you don't catch false positives. We can also provide *ranges* to be used too:

```plaintext /This/#yellow /matches/#yellow /lowercase/#yellow /uppercase/#yellow /and/#yellow /numbers/#yellow /But/#yellow /not/#yellow /special/#yellow /characters/#yellow /or/#yellow /whitespace/#yellow 
regex pattern: [a-zA-Z0-9]
---
This matches lowercase, uppercase, and numbers. But not special characters or whitespace!
```

Next, we'll cover how to avoid being too verbose with your pattern.

## Quantifiers and Anchors

Often, we 

## Groups

# grep

# sed

# awk

# jq
