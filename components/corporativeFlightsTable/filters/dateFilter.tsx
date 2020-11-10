import { DatePicker, Button, Space } from 'antd';
import { SearchOutlined, CalendarOutlined } from '@ant-design/icons';
import { FilterDropdownProps } from 'antd/lib/table/interface';

const DateFilter = (dataIndex: string) => {
    const handleReset = (clearFilters: () => void) => {
        clearFilters();
    };
    return ({
        filterDropdown: ({ setSelectedKeys, confirm, clearFilters }: FilterDropdownProps) => (
            <div style={{ padding: 8 }}>
                <DatePicker
                    placeholder="Seleccionar"
                    style={{ width: 188, marginBottom: 8, display: "block" }}
                    format="YYYY-MM-DD"
                    onChange={e =>
                        setSelectedKeys(e ? [e.format("YYYY-MM-DD")] : [])
                    }
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => confirm()}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                        </Button>
                    <Button
                        onClick={() => handleReset(clearFilters!)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) =>
            (<CalendarOutlined style={{ color: filtered ? "#1890ff" : undefined }} />),
        onFilter: (value: string, record: any) => {
            return record[dataIndex] ? record[dataIndex].toString().includes(value) : ""
        },
    });
}

export default DateFilter;