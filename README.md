# tavora-sdk

`@tavora/sdk` is the only API a Tavora game system or module compiles against. There is no
privileged internal API, and the two first-party systems are built from separate
repositories against published versions of this package to prove it.

Design: [concept doc 06](https://github.com/tavora-vtt/tavora-docs/blob/main/concept/06-extensibility.md)
and [concept doc 15](https://github.com/tavora-vtt/tavora-docs/blob/main/concept/15-design-system.md)
for the host component vocabulary.

> Links to `tavora-docs` point at a repository that is currently private, so they resolve
> only for members of the organisation. The design rationale will open up with it.

## Status

Milestone M5. This package currently pins the shape of the manifest and the capability
list. The hook surface, the schema builder, the dice resolver registration and the host
component vocabulary land with the sandbox.

## Licence

Apache-2.0, deliberately. Packages built on this are yours to license however you want,
including commercially. See
[ADR 0006](https://github.com/tavora-vtt/tavora-docs/blob/main/adr/0006-licensing.md).
