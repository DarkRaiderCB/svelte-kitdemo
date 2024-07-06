export async function load({params}) {
    let k = {
        content: `hi ${params.slug}`
    }
    return k
}