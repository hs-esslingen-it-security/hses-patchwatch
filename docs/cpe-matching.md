---
id: cpe-matching
title: CPE Matching
sidebar_position: 4
---

After the initial banner grabbing we proceed to match banners to CPEs, which help us to identify software products and their versions in a well structured way. This is a challenge since the banners vary in structure and content. While some banners might provide us with full information about the used product, software and even
operating systems, others might only reveal the product itself.

![cpe-matching](/img/docs/cpeMatching.png)

We use regular expressions (regex) to identify the parts of the banner that indicate product and version information. A
regex defines a desired structure of a string and extracts substrings (e.g., a version in the format of aa.bb.cc with aa as major, bb as minor and cc as bugfix number). If a regex did not match a defined format, our tool continues with the next regex. The creation of the regex definitions requires manual analysis of the collected banners.

An example for such an regex is:

```regex
220-FileZilla Server (?:version)?\s?([0-9])\.([0-9])\.([0-9]*)
```

This regex matches a banner in the form of:

```txt
220-FileZilla Server 0.9.60 beta\r\n220-written by Tim Kosse
```

Depending on the banner structure, we can extract information about the product itself, its version, build dates and information about the operators or owners of the service. The extracted information in this case is the version number (0.9.60 beta).

Based on the extracted infos we can now generate e CPE, for our example it would look like this:

```txt
cpe:2.3:a:filezilla-project:filezilla_server:0.9.60:beta:*:*:*:*:*:*
```
