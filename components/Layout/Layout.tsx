import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";

const { Header, Sider, Content } = Layout;

interface Props {
	children: React.ReactNode;
}

const App: React.FC<Props> = ({ children }) => {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<Layout>
			<Sider trigger={null} collapsible collapsed={collapsed} className="w-full h-screen">
				<div className="w-[90%] h-[50px] my-8 mx-auto bg-blue-600" />
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={["1"]}
					items={[
						{
							key: "1",
							icon: <UserOutlined />,
							label: "",
						},
						{
							key: "2",
							icon: <VideoCameraOutlined />,
							label: "nav 2",
						},
						{
							key: "3",
							icon: <UploadOutlined />,
							label: "nav 3",
						},
					]}
				/>
			</Sider>
			<Layout>
				<Header className="bg-gray-100">
					<button onClick={() => setCollapsed(!collapsed)}>
						{collapsed ? <MenuUnfoldOutlined className="text-2xl" /> : <MenuFoldOutlined className="text-2xl" />}
					</button>
				</Header>
				<Content className="p-4">{children}</Content>
			</Layout>
		</Layout>
	);
};

export default App;
