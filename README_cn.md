---
layout: home
title: Metaplus - 一个全域元数据的增强副本
permalink: /cn/
---

TODO：这里放一些tags

最新版本：`0.1.0`，更新内容：
- 工欲善其事，必先利其器，一些初始化工作
- 搭建了一个全域元数据CRUD的操作内核，见：[Rest API](/cn/rest_api)
- 接下来计划加入第一个也是当前最重要的元数据域：`::domain::table` 。

## 为什么要有 Metaplus ？

在数据领域中，虽然主数据的存储架构一直在推陈出新，但它们的元数据能否共用一套统一的存储管理方案？

这也许可行，但答案尚未可知（[谁会成为下一代统一元数据方案？](/cn/faq)）。
目前可以确定的是，能够存在一套统一的非生产环境的元数据副本方案，这份副本可以用于数据的发现、管理和治理。

**Metaplus** 的设计目标是打造一个准确、实时、全域、增强的元数据副本，它有不断丰富的[同步器](/cn/supported_syncer)，并提供 [Rest API](/cn/rest_api) 和 [Client](/cn/metaplus_client) ，基于 [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) 开源协议，非常方便与第三方框架进行集成。

与 [一些优秀的元数据副本方案](/cn/faq#) 相比，**Metaplus** 具有以下几个核心优势：

- **轻量** ：只专注于元数据增强副本这一件事，没有功能杂多集成系统，甚至没有WebUI，数据存储只依赖Elasticsearch。
- **开放** ：从元数据定义、同步、增强、管理、治理都是开放可定制、可扩展的，基于ta可以很容易搭建一个领域专属元数据平台。
- **模型** ：有一套良好定义的全域元数据模型，甚至连描述元数据定义的元数据都在被Ta自身管理，且已预定义了 `::domain::table` 等常用元数据。




## License

This work is open sourced under the Apache License, Version 2.0.


