import type { Meta, StoryObj } from '@storybook/angular';
import { PopUpComponent } from '../app/components/pop-up/pop-up.component';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<PopUpComponent> = {
  title: 'Example/PopUp',
  component: PopUpComponent,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: {
    //   control: 'color',
    // },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<PopUpComponent>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TopLeft: Story = {
  args: {
    bottom: false,
    top: true,
    left: true,
    conteudo: 'teste'

    // primary: true,
    // label: 'Button',
  },
};

export const bottomLeft: Story = {
  args: {
    bottom: true,
    top: false,
    left: true,
  },
};

export const TopRight: Story = {
  args: {
    bottom: false,
    top: true,
    left: false,
    right: true,
    conteudo: 'teste'

    // primary: true,
    // label: 'Button',
  },
};

export const BottomRight: Story = {
  args: {
    bottom: true,
    top: false,
    left: false,
    right: true,
    conteudo: 'teste'

    // primary: true,
    // label: 'Button',
  },
};