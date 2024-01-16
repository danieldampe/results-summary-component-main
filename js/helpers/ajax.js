export default async function ajax(properties) {
    try {
        let {url, sucess} = properties, response = await fetch(url), data;
        if(!response.status) throw response;
        data = await response.json();
        sucess(data);
    } catch (error) { console.error(error); };
};
