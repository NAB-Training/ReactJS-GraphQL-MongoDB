const { argsToArgsConfig } = require('graphql/type/definition')

const resolvers={
    Query:{
        // getAllStudents:async(parent,args,{methods})=>await methods.getAllStudents(),
        // getAllTeachers:async(parent,args,{methods})=>await methods.getAllTeachers(),
        schools:async(parent,args,{methods})=>await methods.getAllSchools(),
        // getOneStudent:async(parent,{id},{methods})=>await methods.getOneStudent(id),
        // getOneTeacher:async(parent,{id},methods)=>await methods.getOneTeacher(id),
        // getOneSchool:async(parent,{id},{methods})=>await methods.getOneSchool(id),

    },
    
    Mutation:{
        createSchool:async(parent,args,{methods})=>await methods.createSchool(args),
        createTeacher:async(parent,args,{methods})=>await methods.createTeacher(args),
        createStudent:async(parent,args,{methods})=>await methods.createStudent(args)
    }
}
module.exports=resolvers