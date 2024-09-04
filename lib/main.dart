import 'package:aplikasi_pertamaku/wisatabandung/main_screen.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        fontFamily: 'NewAmsterdam',
      ),
      debugShowCheckedModeBanner: false,
      home: const MainScreen(),
    );
  }
}

// class FirstPage extends StatefulWidget {
//   const FirstPage({super.key});

//   @override
//   State<FirstPage> createState() => _FirstPageState();
// }

// class _FirstPageState extends State<FirstPage> {
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         centerTitle: true,
//         backgroundColor: Colors.blue,
//         title: const Text(
//           "My First Page",
//           style: TextStyle(
//               color: Colors.white, fontSize: 25, fontWeight: FontWeight.bold),
//         ),
//         actions: const [
//           Icon(
//             Icons.search,
//             color: Colors.white,
//           )
//         ],
//         leading: const Icon(
//           Icons.menu,
//           color: Colors.white,
//         ),
//       ),
//       body: Center(
//         child: Column(
//           children: [
//             Container(
//               decoration: BoxDecoration(
//                   color: Colors.amber,
//                   border: Border.all(width: 2, color: Colors.green),
//                   borderRadius: const BorderRadius.all(
//                     Radius.circular(15),
//                   ),
//                   boxShadow: const [
//                     BoxShadow(
//                         color: Colors.black,
//                         offset: Offset(3, 6),
//                         blurRadius: 10)
//                   ]),
//               width: 150,
//               height: 50,
//               child: const Center(
//                 child: Text(
//                   "Hello First Page!",
//                   style: TextStyle(color: Colors.black),
//                 ),
//               ),
//             ),
//             const Padding(
//               padding: EdgeInsets.symmetric(vertical: 20),
//               child: Text(
//                 "Mari Mengaji",
//                 style: TextStyle(fontWeight: FontWeight.bold, fontSize: 25),
//               ),
//             ),
//             Container(
//               margin: const EdgeInsets.only(bottom: 20),
//               color: Colors.blue,
//               height: 30,
//               width: 90,
//               child: const Icon(Icons.ac_unit_sharp),
//             ),
//             const Row(
//               mainAxisAlignment: MainAxisAlignment.spaceAround,
//               children: [
//                 Icon(Icons.share),
//                 Icon(Icons.comment),
//                 Icon(Icons.thumb_up)
//               ],
//             ),
//           ],
//         ),
//       ),
//       floatingActionButton: FloatingActionButton(
//         backgroundColor: Colors.blue,
//         onPressed: () {},
//         child: const Icon(Icons.add),
//       ),
//     );
//   }
// }
