import {IResolvers} from 'graphql-tools';

const helloResolver : IResolvers = {
    Query :{
        hello(){
            return "hello"
        }
    }
}

export default helloResolver;