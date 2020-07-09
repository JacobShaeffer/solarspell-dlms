interface TabDict {
    [key: string]: TabData
}

interface TabData {
    display_label: JSX.Element | string,
    component: (tabs: TabDict) => JSX.Element,
    icon: any
}

interface SerializedMetadata {
    id: number
    name: string
    type: number
    type_name: string
}

type content_filters = {
    title?: string
    years?: [number, number]
    filename?: string
    copyright?: string
    active?: boolean
    metadata?: number[]
    sort?: string
}

interface SerializedContent {
    id: number
    file_name: string
    content_file: string
    title: string
    description: string|null
    modified_on: string
    copyright: string|null
    rights_statement: string|null
    active: boolean
    metadata: number[]
    metadata_info: SerializedMetadata[]
    published_year: string|null
}

interface SerializedMetadataType {
    id: number
    name: string
}

interface metadata_dict {
    [metadata_type: string]: SerializedMetadata[]
}

//field_info contains data of a field and information about whether that data is valid.
//reason should default to the empty string "" and any other value will contain a human-readable string
//saying why the data in value is invalid
type field_info<T> = {
    value: T
    reason: string
}