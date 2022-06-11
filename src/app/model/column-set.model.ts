export interface ColumnSet {
    key: string,
    title: string,
    type: string,
    valuePrepare?: (value: string) => any,
    renderComponent?: any,
}
