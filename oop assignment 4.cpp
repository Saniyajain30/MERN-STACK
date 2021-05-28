#include<iostream>
using namespace std;
class sample2;
class sample1
{
	int x;
	public:
		 sample1(int a);
		 friend void max(sample s1,sample s2);
};
sample1::sample1(int a)
{
	x=a;
}
class sample2
