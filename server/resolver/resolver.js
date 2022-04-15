const { argsToArgsConfig } = require('graphql/type/definition')

const resolvers={
    Query:{
        students:async(parents,args,{methods})=>await methods.getAllStudents(),
        teachers:async(parents,args,{methods})=>await methods.getAllTeachers(),
        schools:async(parents,args,{methods})=>await methods.getAllSchools(),
        student:async(parent,{id},{methods})=>await methods.getOneStudent(id),
        teacher:async(parent,{id},{methods})=>await methods.getOneTeacher(id),
        school:async(parent,{id},{methods})=>await methods.getOneSchool(id),
    },
    School:{
        teachers:async({id},args,{methods})=>await methods.getAllTeachers({schoolId:id}),
    },
    Mutation:{
        createSchool:async(parents,args,{methods})=>await methods.createSchool(args),
        createTeacher:async(parents,args,{methods})=>await methods.createTeacher(args),
        createStudent:async(parents,args,{methods})=>await methods.createStudent(args)
    }
}
module.exports=resolvers