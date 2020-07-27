import * as MigrationImporter from '../Migration/Migration'
import * as SchemaImporter from '../Schema/Schema'

export namespace Migration
{
    import Migration = MigrationImporter.Migration.Migration
    import Schema = SchemaImporter.Schema.Schema

    export class InstanceMigration extends Migration
    {
        up()
        {
            Schema.create('', (table) =>
            {

            })
        }

        down()
        {
            Schema.drop('')
        }
    }
}
