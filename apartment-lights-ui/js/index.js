$(document).ready(() => {
    const baseURL = 'http://atlas/lights';

    function setupLightGroup(local) {
        const template = $(document.getElementById('light-group').content).clone();
        template.find('.button').data('paths', local.paths);
        template.find('.group-header').text(local.name);

        template.find(`#red.button`).data('args', {'mode': 'color', 'red': 255});
        template.find(`#blue.button`).data('args', {'mode': 'color', 'blue': 255});
        template.find(`#green.button`).data('args', {'mode': 'color', 'green': 255});
        template.find(`#white.button`).data('args', {'mode': 'color', 'white': 255, 'blue': 255});
        template.find(`#rainbow.button`).data('args', {'mode': 'rainbow', 'interval': 0});
        template.find(`#off.button`).data('args', {'mode': 'off'});

        $(document.body).append(template);
    }

    const groups = [{'name': 'bedroom'
                    ,'paths': ['bedroom/short', 'bedroom/long']}
                   ,{'name': 'monitor'
                    ,'paths': ['monitor']}
                   ,{'name': 'windowsill'
                    ,'paths': ['windowsill']}]

    groups.forEach(setupLightGroup);

    $('.button').on('click', (event) => {
        const data = $(event.target).data();
        console.log(data.paths);
        const color = $(event.target).data('blue');

        data.paths.forEach((path)=>{
            $.ajax({
                url: 'lights/' + path,
                method: 'PUT',
                data: JSON.stringify(data.args)
            });
        });
    });
});
