import type { Meta, StoryObj } from '@storybook/angular';
import { PopUpComponent } from '../app/components/pop-up/pop-up.component';
import { popUpInterface } from '../app/components/pop-up/interfaces/Ipop-up.interfaces';


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
export const popUpAlert: Story = {
  args: {
    conteudo: 'teste',
    type: popUpInterface.alert

    // primary: true,
    // label: 'Button',
  },
};

export const popUpConfirm: Story = {
  args: {
    conteudo: 'teste',
    type: popUpInterface.confirm
  },
};

export const popUpDanger: Story = {
  args: {
    conteudo: 'teste',
    type: popUpInterface.danger

    // primary: true,
    // label: 'Button',
  },
};

export const popUpInfo: Story = {
  args: {
    conteudo: 'teste',
    type: popUpInterface.info
    // primary: true,
    // label: 'Button',
  },
};