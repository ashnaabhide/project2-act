import { html } from 'lit';
import '../src/project2-act.js';

export default {
  title: 'Project2Act',
  component: 'project2-act',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <project2-act
      style="--project2-act-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </project2-act>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
