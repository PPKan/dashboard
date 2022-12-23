import type { ProColumns } from "@ant-design/pro-components";
import {
  EditableProTable,
  ProCard,
  ProFormField,
  ProFormRadio,
} from "@ant-design/pro-components";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../../firebase";

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const tableName = "finance-data";

type tableType = {
  year: number;
  source: string;
  title: string;
};

type DataSourceType = {
  id: React.Key;
} & tableType;

const querySnapshot = await getDocs(collection(db, tableName));

const defaultData: DataSourceType[] = [];

querySnapshot.forEach((doc) => {
  defaultData.push({
    ...(doc.data() as tableType),
    id: doc.id as React.Key,
  });
});

export default () => {
  function handleDelete(id: string) {
    const docRef = doc(db, tableName, id);
    deleteDoc(docRef).then(() => {
      console.log("Document successfully deleted!");
    });
  }

  function handleAdd(rowKey: any, data: any, row: any) {
    addDoc(collection(db, tableName), {
      ...data,
      // id: rowKey,
    }).then(() => {
      console.log("Document successfully written!");
    });
  }

  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const [dataSource, setDataSource] = useState<readonly DataSourceType[]>([]);
  const [position, setPosition] = useState<"top" | "bottom" | "hidden">(
    "top"
  );

  const columns: ProColumns<DataSourceType>[] = [
    {
      title: "年度",
      dataIndex: "year",
      valueType: "digit",
      width: "10%",
      sorter: (a, b) => a.year - b.year,
    },
    {
      title: "季度",
      valueType: "select",
      width: "15%",
      dataIndex: "title",
      valueEnum: {
        Q1: {
          text: "Q1",
        },
        Q2: {
          text: "Q2",
        },
        Q3: {
          text: "Q3",
        },
        合併財報: {
          text: "合併財報",
        },
        個體財報: {
          text: "個體財報",
        },
      },
    },
    {
      title: "檔案連結",
      tooltip:
        "如果使用 google drive, 請用連結網站將分享用的網址轉換成直接下載用的網址 https://sites.google.com/site/gdocs2direct/",
      valueType: "text",
      dataIndex: "source",
    },
    {
      title: "操作",
      valueType: "option",
      width: 200,
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          編輯
        </a>,
        <a
          key="delete"
          onClick={() => {
            setDataSource(dataSource.filter((item) => item.id !== record.id));
            handleDelete(record.id as string);
          }}
        >
          刪除
        </a>,
      ],
    },
  ];

  return (
    <> 
      <EditableProTable<DataSourceType>
        rowKey="id"
        headerTitle="財務資訊"
        maxLength={300}
        scroll={{
          x: 960,
        }}
        // @ts-ignore Error occurs when the props not adding questionmark
        recordCreatorProps={
          position !== "hidden"
            ? {
                position: position as "top",
                record: () => ({ id: Date.now() }),
              }
            : false
        }
        loading={false}
        toolBarRender={() => [
          <ProFormRadio.Group
            key="render"
            fieldProps={{
              value: position,
              onChange: (e) => setPosition(e.target.value),
            }}
            options={[
              {
                label: "添加到頂部",
                value: "top",
              },
              {
                label: "添加到底部",
                value: "bottom",
              },
              {
                label: "隱藏",
                value: "hidden",
              },
            ]}
          />,
        ]}
        columns={columns}
        request={async () => ({
          data: defaultData,
          total: 3,
          success: true,
        })}
        value={dataSource}
        onChange={setDataSource}
        editable={{
          type: "multiple",
          editableKeys,
          onSave: async (rowKey, data, row) => {
            handleAdd(rowKey, data, row);
            console.log(rowKey, data, row);
            await waitTime(2000);
          },
          onChange: setEditableRowKeys,
        }}
      />
      <ProCard title="表格數據" headerBordered collapsible defaultCollapsed>
        <ProFormField
          ignoreFormItem
          fieldProps={{
            style: {
              width: "100%",
            },
          }}
          mode="read"
          valueType="jsonCode"
          text={JSON.stringify(dataSource)}
        />
      </ProCard>
    </>
  );
};
