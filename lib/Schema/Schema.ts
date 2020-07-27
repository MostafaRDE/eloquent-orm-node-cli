import * as BlueprintImporter from './Blueprint'

export namespace Schema
{
    import Blueprint = BlueprintImporter.Schema.Blueprint

    interface BlueprintFunctionImporter
    {
        (table: Blueprint): any
    }

    export class Schema
    {
        static create(table: string, blueprint: BlueprintFunctionImporter)
        {

        }

        static drop(table: string)
        {

        }
    }
}
