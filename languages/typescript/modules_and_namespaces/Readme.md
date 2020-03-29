## Typescript Modules nd Namespaces

#### Typescript 1.5 change
In module ( internal modules -> namespaces, external modules -> modules)

ECMASCRIPT 2015 support added, ts started using that syntax


#### Defining Namepsace
```
namespace Membership {
    export function AddMember(name:string) {
        //add a new member
    }

    export namespace Cards {
        export function IssueCard(memberNumber: number) {

        }
    }
}

Membership.AddMember('Surendar');
Membership.Cards.IssueCard(1234);
```
#### Triple Slash References

When one file dependent on other file

` ///<reference path="membership.ts" /> `

- Enhances edtor support for referenced files
- Typesccript compiler will compile all required references
- use -outFile compiler option to generate single JS output file(for browsers especially)



