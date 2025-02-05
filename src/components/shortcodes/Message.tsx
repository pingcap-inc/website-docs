import {
  message,
  warning,
  important,
  note,
  tip,
  messageBody,
  messageTitle,
  messageIcon,
} from './message.module.scss'

import { FC, ReactNode } from 'react'
import {
  MdAttachment,
  MdFlag,
  MdNotifications,
  MdOutlineWarning,
} from 'react-icons/md'
import { Trans } from 'gatsby-plugin-react-i18next'

type MessageType = 'warning' | 'important' | 'note' | 'tip'

interface Props {
  type: MessageType
  icon: ReactNode
  title: ReactNode
}

const MessageClass: Record<MessageType, string> = {
  warning,
  important,
  note,
  tip,
}

const Message: FC<Props> = ({ type, icon, title, children }) => (
  <div className={`${message} ${MessageClass[type]}`}>
    <div className={messageTitle}>
      <span className={messageIcon}>{icon}</span>
      <span>{title}</span>
    </div>
    <div className={messageBody}>{children}</div>
  </div>
)

export const Important: FC = ({ children }) => (
  <Message
    type="important"
    icon={<MdNotifications />}
    title={<Trans i18nKey="shortcodes.important" />}>
    {children}
  </Message>
)

export const Warning: FC = ({ children }) => (
  <Message
    type="warning"
    icon={<MdOutlineWarning />}
    title={<Trans i18nKey="shortcodes.warning" />}>
    {children}
  </Message>
)

export const Note: FC = ({ children }) => (
  <Message
    type="note"
    icon={<MdFlag />}
    title={<Trans i18nKey="shortcodes.note" />}>
    {children}
  </Message>
)

export const Tip: FC = ({ children }) => (
  <Message
    type="tip"
    icon={<MdAttachment />}
    title={<Trans i18nKey="shortcodes.tip" />}>
    {children}
  </Message>
)
