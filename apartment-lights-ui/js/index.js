$(document).ready(() => {
    const baseURL = 'http://atlas/lights/';

    function callLights(local, method) {
        $.get(`${baseURL}${local}?method=${method}`);
    }

    const lightMethodMap = { white: 'L06',
                             blue: 'L04',
                             red: 'L00',
                             green: 'L02',
                             rainbow: 'L05',
                             off: 'L14' };

    function setupLightGroup(local) {
        const template = document.querySelector('#light-group');
        template.content.querySelector('.light-group').id = local;
        template.content.querySelector('.group-header').textContent = local;

        const clone = document.importNode(template.content, true);
        document.body.appendChild(clone);

        Object.keys(lightMethodMap).forEach((entry) => {
            $(`#${local} #${entry}`).click(() => {
                callLights(local, lightMethodMap[entry]);
            });
        });
    }

    const groups = ['bedroom', 'tv'];
    groups.forEach(setupLightGroup);
});
