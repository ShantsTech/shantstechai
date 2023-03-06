import { Box, DefaultMantineColor, Loader, Text, RingProgress } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { IconCheck, IconPlus, IconTrash, IconX } from '@tabler/icons';
import {
  ShantsTechLinkResourceManager,
  ShantsTechLinkResourceManagerProps,
} from '~/components/ShantsTechLink/ShantsTechLinkResourceManager';
import { ShantsTechTooltip, ShantsTechTooltipProps } from '~/components/ShantsTechWrapped/ShantsTechTooltip';
import { useIsMobile } from '~/hooks/useIsMobile';

const buttonStates: Record<string, ButtonStateFn> = {
  downloading: ({ hovered, progress }) => ({
    // icon: hovered ? <IconX strokeWidth={2.5} /> : <Loader color="#fff" size={24} />,
    icon: hovered ? (
      <IconX strokeWidth={2.5} />
    ) : progress ? (
      <RingProgress
        size={30}
        thickness={4}
        rootColor="rgba(255, 255, 255, 0.4)"
        sections={[{ value: progress ?? 0, color: 'rgba(255, 255, 255, 0.8)' }]}
      />
    ) : (
      <Loader color="#fff" size={24} />
    ),
    color: hovered ? 'red' : 'blue',
    label: hovered ? 'Cancel download' : 'Downloading',
  }),
  installed: ({ hovered }) => ({
    icon: hovered ? <IconTrash /> : <IconCheck strokeWidth={2.5} />,
    color: hovered ? 'red' : 'green',
    label: hovered ? 'Remove from SD' : 'Installed',
  }),
  notInstalled: () => ({
    icon: <IconPlus strokeWidth={2.5} />,
    color: 'blue',
    label: 'Add to SD',
  }),
};

type ButtonStateFn = (props: { hovered: boolean; progress?: number }) => {
  icon: JSX.Element;
  color: DefaultMantineColor;
  label: string;
};

export const CivitiaLinkManageButton = ({
  children,
  noTooltip,
  tooltipProps = {},
  ...managerProps
}: {
  children: (props: ChildFuncProps) => JSX.Element;
  noTooltip?: boolean;
  tooltipProps?: Omit<ShantsTechTooltipProps, 'children' | 'label'>;
} & ShantsTechLinkResourceManagerProps) => {
  const { hovered, ref } = useHover<HTMLButtonElement>();
  const isMobile = useIsMobile();

  return (
    <ShantsTechLinkResourceManager {...managerProps}>
      {({ addResource, removeResource, cancelDownload, downloading, hasResource, progress }) => {
        const state = downloading ? 'downloading' : hasResource ? 'installed' : 'notInstalled';
        const buttonState = buttonStates[state]({ hovered: !isMobile && hovered, progress });
        const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          e.stopPropagation();

          if (downloading) cancelDownload();
          else if (hasResource) removeResource();
          else addResource();
        };

        if (noTooltip) return children({ ref, onClick, ...buttonState });

        return (
          <ShantsTechTooltip label={buttonState.label} {...tooltipProps}>
            <Box>{children({ ref, onClick, ...buttonState })}</Box>
          </ShantsTechTooltip>
        );
      }}
    </ShantsTechLinkResourceManager>
  );
};

type ChildFuncProps = {
  ref: React.RefObject<HTMLButtonElement>;
  color: DefaultMantineColor;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon: React.ReactNode;
  label: string;
};
