import { Layout } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Foter from "../shared/footer";
import AdminMenu from "./others/adminMenu";
import AdminTop from "./others/adminTop";

const AdminLayout = ({ title, children, pageTitle, child = false }) => {
	const [collapsed, setCollapsed] = useState(false);
	const [hide, setHide] = useState(false);
	const { width } = useWindowDimensions();

	const toggle = () => {
		setCollapsed(!collapsed);
	};

	useEffect(() => {
		if (width < 1024) {
			setHide(true);
		} else {
			setHide(false);
		}

		if (width < 768) {
			setCollapsed(true);
		} else {
			setCollapsed(false);
		}
	}, [width]);

	return (
		<Layout hasSider>
			<Head>
				<title>{title || "Othoba Mart"}</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="hidden lg:block">
				<Sider
					collapsible
					collapsed={collapsed}
					onCollapse={toggle}
					style={{ position: "fixed", height: "100vh" }}
				>
					<AdminMenu collapsed={collapsed} />
				</Sider>
			</div>

			<Layout
				className={`${hide ? "ml-0" : collapsed ? "ml-20" : "ml-52"}`}
			>
				<AdminTop pageTitle={pageTitle} child={child} />
				<Content
					style={{
						minHeight: "90vh",
						marginTop: "2.5rem",
					}}
				>
					<div className="pl-4 pr-5">{children}</div>
				</Content>
				<Footer style={{ textAlign: "center" }}>
					<Foter />
				</Footer>
			</Layout>
		</Layout>
	);
};

export default AdminLayout;