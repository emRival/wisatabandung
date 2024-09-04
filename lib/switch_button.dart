import 'package:flutter/material.dart';

class MySwitchButton extends StatefulWidget {
  const MySwitchButton({super.key});

  @override
  State<MySwitchButton> createState() => _MySwitchButtonState();
}

class _MySwitchButtonState extends State<MySwitchButton> {
  bool _switch = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: _switch ? Colors.black : Colors.white,
        title: Text(
          "Switch Button",
          style: TextStyle(color: _switch ? Colors.white : Colors.black),
        ),
        centerTitle: true,
      ),
      body: Container(
        decoration: BoxDecoration(
          color: _switch ? Colors.black : Colors.white,
        ),
        child: Center(
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(
                Icons.light_mode_sharp,
                color: _switch ? Colors.white : Colors.yellow,
              ),
              Switch(
                value: _switch,
                onChanged: (value) {
                  setState(() {
                    _switch = value;
                  });

                  ScaffoldMessenger.of(context).showSnackBar(
                    SnackBar(
                      backgroundColor: _switch ? Colors.yellow : Colors.black,
                      duration: const Duration(milliseconds: 50),
                      content: Text(
                        _switch ? "Dark Mode is On" : "Dark Mode is Off",
                        style: TextStyle(
                          color: _switch ? Colors.black : Colors.white,
                        ),
                      ),
                    ),
                  );
                },
              ),
              Icon(
                Icons.dark_mode_sharp,
                color: _switch ? Colors.yellow : Colors.black,
              ),
            ],
          ),
        ),
      ),
    );
  }
}
