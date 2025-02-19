import { reactExample } from 'Frontend/demo/react-example'; // hidden-source-line
import layoutExampleStyle from './layoutExampleStyle'; // hidden-source-line
import React, { useState } from 'react';
import { Button } from '@hilla/react-components/Button.js';
import { RadioGroup } from '@hilla/react-components/RadioGroup.js';
import { RadioButton } from '@hilla/react-components/RadioButton.js';
import { HorizontalLayout } from '@hilla/react-components/HorizontalLayout.js';

function Example() {
  const [theme, setTheme] = useState('margin');

  return (
    <>
      {/* tag::snippet[] */}
      <div className="container">
        <HorizontalLayout theme={`${theme} spacing padding`} style={{ alignItems: 'stretch' }}>
          <Button>Button 1</Button>
          <Button>Button 2</Button>
          <Button>Button 3</Button>
        </HorizontalLayout>
      </div>

      <RadioGroup
        label="Margin"
        value={theme}
        onValueChanged={(event) => {
          setTheme(event.detail.value);
        }}
      >
        <RadioButton value="margin" label="Enabled" />
        <RadioButton value="" label="Disabled" />
      </RadioGroup>
      {/* end::snippet[] */}
    </>
  );
}

export default reactExample(Example, layoutExampleStyle); // hidden-source-line
