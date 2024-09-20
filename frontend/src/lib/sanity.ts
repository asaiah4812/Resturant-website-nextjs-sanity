import { createClient } from "next-sanity";


const projectId = 'unz78nse';
const dataset = 'production';
const apiVersion = '2024-08-06'


export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true
})