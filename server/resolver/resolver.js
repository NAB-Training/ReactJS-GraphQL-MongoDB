const { argsToArgsConfig } = require('graphql/type/definition')
const Student=require('../model/student');
const Teacher=require('../model/teacher')
const School = require('../model/school')

const resolvers={
    Query:{
        students:async(parents,args,{methods})=>await methods.getAllStudents()
    }
}
module.exports=resolvers