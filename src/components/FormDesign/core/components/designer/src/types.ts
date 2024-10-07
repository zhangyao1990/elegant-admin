import type { PageSchema } from '../../../../core'

export interface DesignerProps {
  disabledZoom?: boolean
  hiddenHeader?: boolean
  lockDefaultSchemaEdit?: boolean
  formMode?: boolean
  title?: string
  defaultSchema?: PageSchema
  sourceCodeReadOnly?: boolean
}
