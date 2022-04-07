---
id: overview
title: Scan Pipeline
sidebar_position: 1
slug: /
---

Our data mining can be divided into three subsections.

1. In the first step, an IP dataset is created for which the scans are to be performed.
2. In the following step, zmap is used to check whether these IP addresses are reachable on specific ports, and zgrab2 is used to perform a protocol handshake. The resulting data is stored in a database and further enriched in the following steps.
3. A Custom Platform Enumerator (CPE) is used to uniquely identify a software product. Therefore, in this step, if possible, we generate the corresponding CPE for each identified banner.  
   Using this data, we can now check whether the software is up-to-date. The product lifetime required for this are collected manually from the manufacturer websites.

![](/img/docs/overview.png)
