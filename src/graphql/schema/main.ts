import {mergeTypeDefs} from 'graphql-tools';
import user from './user.graphql';
import hello from './hello.graphql';
const types = [
    user,
    hello
]

export default mergeTypeDefs(types);