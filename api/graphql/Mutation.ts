import { schema } from "nexus"

schema.mutationType({
    definition(t) {
      t.crud.createOneWorld()
      t.crud.updateOneWorld()
      t.crud.upsertOneWorld()
      t.crud.deleteOneWorld()
  
      t.crud.updateManyWorld()
      t.crud.deleteManyWorld()
    }
  })