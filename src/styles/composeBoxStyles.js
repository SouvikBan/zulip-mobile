/* @flow */
import { Platform } from 'react-native';

import { BRAND_COLOR, HALF_SPACING, SPACING } from './';

type Props = {
  color: string,
  backgroundColor: string,
  borderColor: string,
};

const inputMarginPadding = {
  paddingHorizontal: HALF_SPACING,
  ...Platform.select({
    ios: {
      paddingVertical: 8,
    },
    android: {
      paddingVertical: 2,
    },
  }),
};

export default ({ color, backgroundColor, borderColor }: Props) => ({
  composeBox: {
    flexDirection: 'row',
    backgroundColor: 'rgba(127, 127, 127, 0.1)',
  },
  composeText: {
    flex: 1,
    paddingVertical: HALF_SPACING,
    justifyContent: 'center',
  },
  composeTextInput: {
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor,
    color,
    fontSize: 15,
    ...inputMarginPadding,
  },
  topicInput: {
    borderWidth: 0,
    borderRadius: 5,
    backgroundColor,
    marginBottom: HALF_SPACING,
    ...inputMarginPadding,
  },
  composeSendButton: {
    margin: HALF_SPACING,
  },
  composeMenu: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
  expandButton: {
    padding: SPACING * 3 / 4,
    color: BRAND_COLOR,
  },
  composeMenuButton: {
    padding: SPACING * 3 / 4,
    marginRight: -HALF_SPACING,
    color: BRAND_COLOR,
  },
});
