import 'package:flutter/material.dart';

class DetailScreen1 extends StatelessWidget {
  const DetailScreen1({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          children: [
            Image.asset('assets/images/farm-house.jpg'),
            Container(
              padding: const EdgeInsets.symmetric(vertical: 20),
              child: const Text(
                "Farm House Lembang",
                style: TextStyle(fontSize: 25, fontWeight: FontWeight.bold),
              ),
            ),
            Container(
              child: const Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  Column(
                    children: [
                      Icon(Icons.date_range),
                      Text("Open Everyday"),
                    ],
                  ),
                  Column(
                    children: [
                      Icon(Icons.access_time),
                      Text("09:00 - 20:00"),
                    ],
                  ),
                  Column(
                    children: [
                      Icon(Icons.monetization_on_outlined),
                      Text("Rp. 25.000"),
                    ],
                  )
                ],
              ),
            ),
            Container(
              padding: const EdgeInsets.all(20),
              child: const Text(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut sem non odio mollis efficitur. Integer est odio, porta volutpat sem in, pharetra tempor erat. Suspendisse fringilla venenatis congue. Nunc eget interdum tellus. Sed fermentum in leo ac cursus. Maecenas sed mauris ex. Nullam euismod quis leo at rhoncus. Vestibulum placerat dolor lectus, ac volutpat odio aliquet eu. Suspendisse egestas velit nunc, ut fermentum mauris eleifend varius. Etiam hendrerit condimentum nibh, vitae fringilla felis dignissim sed. Aenean facilisis, augue id sodales fringilla, lacus ante fermentum elit, eget sodales ipsum tortor a risus. Quisque leo tellus, porta ut quam eget, pretium tincidunt elit.",
                textAlign: TextAlign.center,
              ),
            )
          ],
        ),
      ),
    );
  }
}
