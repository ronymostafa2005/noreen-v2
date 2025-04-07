// import { FiArrowLeft } from "react-icons/fi";
// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "To Do", value: 20, color: "#A3D977" },
//   { name: "In Progress", value: 15, color: "#FFA940" },
//   { name: "Completed", value: 30, color: "#0057D9" },
// ];

// const TaskCard = ({ title, details }) => (
//   <div style={styles.taskCard}>
//     <h3>{title}</h3>
//     <p>{details}</p>
//   </div>
// );

// const Progress = () => {
//   return (
//     <div style={styles.container}>
//       <Header />
//       <ProgressChart />
//       <Legend />
//       <MonthlyTasks />
//     </div>
//   );
// };

// const Header = () => (
//   <div style={styles.header}>
//     <FiArrowLeft style={styles.backIcon} onClick={() => window.location.href = '/inprogress'} />
//     <h2 style={styles.title}>Your Progress</h2>
//   </div>
// );

// const ProgressChart = () => (
//   <div style={styles.chartContainer}>
//     <ResponsiveContainer width="100%" height={200}>
//       <PieChart>
//         <Pie
//           data={data}
//           cx="50%"
//           cy="50%"
//           innerRadius={60}
//           outerRadius={80}
//           paddingAngle={5}
//           dataKey="value"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={entry.color} />
//           ))}
//         </Pie>
//       </PieChart>
//     </ResponsiveContainer>
//     <div style={styles.percentage}>65% Completed</div>
//   </div>
// );

// const Legend = () => (
//   <div style={styles.legend}>
//     {data.map((item) => (
//       <div key={item.name} style={styles.legendItem}>
//         <span style={{ ...styles.dot, backgroundColor: item.color }}></span>
//         <span>{item.name}</span>
//       </div>
//     ))}
//   </div>
// );

// const MonthlyTasks = () => {
//   const tasks = [
//     { title: "Completed", details: "18 Task now • 18 Task Completed" },
//     { title: "In Progress", details: "2 Tasks • 1 Started" },
//     { title: "To Do", details: "2 Tasks • 1 Upcoming" },
//   ];

//   return (
//     <div style={styles.monthlySection}>
//       {tasks.map((task, index) => (
//         <TaskCard key={index} {...task} />
//       ))}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     maxWidth: "600px",
//     margin: "auto",
//     padding: "20px",
//     fontFamily: "Arial, sans-serif",
//     textAlign: "center",
//   },
//   header: {
//     display: "flex",
//     alignItems: "center",
//     marginBottom: "20px",
//   },
//   backIcon: {
//     fontSize: "24px",
//     cursor: "pointer",
//     marginRight: "10px",
//   },
//   title: {
//     fontSize: "20px",
//     fontWeight: "bold",
//   },
//   chartContainer: {
//     position: "relative",
//     width: "100%",
//     height: "250px",
//   },
//   percentage: {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     fontSize: "18px",
//     fontWeight: "bold",
//   },
//   legend: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "15px",
//     margin: "20px 0",
//   },
//   legendItem: {
//     display: "flex",
//     alignItems: "center",
//   },
//   dot: {
//     width: "12px",
//     height: "12px",
//     borderRadius: "50%",
//     marginRight: "5px",
//   },
//   monthlySection: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//     gap: "15px",
//     marginTop: "20px",
//   },
//   taskCard: {
//     padding: "15px",
//     borderRadius: "10px",
//     backgroundColor: "#f0f2f5",
//     textAlign: "left",
//   },
// };

// export default Progress;