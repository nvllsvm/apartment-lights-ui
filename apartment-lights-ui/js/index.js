$(document).ready(() => {
    const baseURL = 'http://atlas/lights/';

    const lightMethodMap = { white: 'L06',
                             blue: 'L04',
                             red: 'L00',
                             green: 'L02',
                             rainbow: 'L05',
                             off: 'L14' };

    function setupLightGroup(local) {
        const template = $(document.getElementById('light-group').content).clone();
        template.find('.button').data('lightSet', local);
        template.find('.group-header').text(local);

        $.map(lightMethodMap, (value, key) => {
            template.find(`#${key}.button`).data('method', value);
        });

        $(document.body).append(template);
    }

    const groups = ['bedroom', 'tv'];
    groups.forEach(setupLightGroup);

    $('.button').on('click', (event) => {
        const method = $(event.target).data('method');
        const lightSet = $(event.target).data('lightSet');

        $.get(`${baseURL}${lightSet}?method=${method}`);
    });
});
