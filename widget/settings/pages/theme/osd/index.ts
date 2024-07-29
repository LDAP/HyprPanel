import { Option } from "widget/settings/shared/Option";
import { Header } from "widget/settings/shared/Header";

import options from "options";

export const OsdTheme = () => {
    return Widget.Scrollable({
        vscroll: "automatic",
        hscroll: "never",
        class_name: "osd-theme-page paged-container",
        vexpand: true,
        child: Widget.Box({
            vertical: true,
            children: [
                Header('On Screen Display Settings'),
                Option({ opt: options.theme.osd.bar_color, title: 'Bar', type: 'color' }),
                Option({ opt: options.theme.osd.bar_overflow_color, title: 'Overflow', subtitle: 'Overflow color is for when the volume goes over a 100', type: 'color' }),
                Option({ opt: options.theme.osd.bar_empty_color, title: 'Bar Background', type: 'color' }),
                Option({ opt: options.theme.osd.bar_container, title: 'Bar Container Background', type: 'color' }),
                Option({ opt: options.theme.osd.icon, title: 'Icon Background', type: 'color' }),
                Option({ opt: options.theme.osd.icon_container, title: 'Icon Container', type: 'color' }),
                Option({ opt: options.theme.osd.label, title: 'Value', type: 'color' }),
            ]
        })
    })
}
