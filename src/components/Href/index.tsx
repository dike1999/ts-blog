import React, { ReactNode } from 'react';
import { Popover, Button, Image } from 'antd';

type HrefProps = {
  extra: ReactNode;
  href: string;
  isImg: boolean;
};
function Href({ extra, href, isImg = false }: HrefProps) {
  const isExternal = (path: string) => /^(https?:|mailto:|tel:|http:)/.test(path);

  let url = href;
  if (!isExternal(href)) {
    url = `http://${href}`;
  }

  return isImg ? (
    <Popover
      placement='right'
      title={(
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h3 style={{ marginBottom: 0 }}>{extra}</h3>
        </div>
      )}
      content={<Image width={150} src={href} />}
      trigger='hover'
      color='#cccccc'
      style={{ display: 'inline-block', paddingLeft: '5px' }}
    >
      <Button type='text' size='small'>
        {extra}
      </Button>
    </Popover>
  ) : (
    <a target='_blank' rel='noreferrer noopener' href={url}>
      {extra}
    </a>
  );
}

export default Href;
