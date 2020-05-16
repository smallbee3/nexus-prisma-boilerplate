import { schema } from "nexus"
      
schema.objectType({
  name: "World",
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.population()
  }
})
